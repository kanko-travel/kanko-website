import type { NextApiRequest, NextApiResponse } from 'next'
import { Formidable } from 'formidable'

export const config = {
  api: {
    bodyParser: false,
  },
}

const SLACK_WEBHOOKS_URL = process.env.SLACK_WEBHOOKS_URL

type ResponseData = {
  message: string
}

interface Result<T> {
  ok?: T
  err?: Error
}

interface RawFields {
  [key: string]: string[]
}

interface EarlyAccessSubmission {
  first_name: string
  last_name: string
  email: string
  company_name: string
  company_type: string
  source: string
  other_source?: string
  h0?: string
  h1?: string
  h2?: string
  h3?: string
  a0?: string
  a1?: string
  a2?: string
  a3?: string
  a4?: string
  a5?: string
  'cf-turnstile-response': string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'METHOD NOT ALLOWED!' })
    return
  }

  let { ok: submission, err } = await parseForm(req)

  if (err || !submission) {
    console.error(err)
    res.status(403).json({ message: 'invalid form' })
    return
  }

  let ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for']

  if (!ip || typeof ip !== 'string') {
    console.error(ip)
    res.status(403).json({ message: 'No IP received in header' })
    return
  }

  let { err: turnstileErr } = await validateTurnstileResponse(
    submission['cf-turnstile-response'],
    ip,
  )

  if (turnstileErr) {
    res.status(403).json({ message: 'Cloudflare Turnstile validation failed' })
    return
  }

  let { err: postMessageErr } = await postMessage(submission)
  if (postMessageErr) {
    res.status(500).json({ message: 'internal server error' })
    return
  }

  res.status(200).json({ message: 'OK' })
}

async function parseForm(
  req: NextApiRequest,
): Promise<Result<EarlyAccessSubmission>> {
  const form = new Formidable()

  return new Promise((resolve, _) => {
    form.parse(req, (err: Error, fields: RawFields, _: any) => {
      if (err) {
        resolve({ err })
      } else {
        resolve(parseEarlyAccessSubmission(fields))
      }
    })
  })
}

function parseEarlyAccessSubmission(
  fields: RawFields,
): Result<EarlyAccessSubmission> {
  let output = {
    first_name: '',
    last_name: '',
    email: '',
    company_name: '',
    company_type: '',
    source: '',
    'cf-turnstile-response': '',
  }

  console.log(Object.keys(output))

  for (let field of Object.keys(output)) {
    if (!fields[field] || fields[field].length <= 0) {
      return { err: new Error(`missing value for ${field} field`) }
    }

    output[field] = fields[field][0]
  }

  for (let optional of [
    'other_source',
    'h0',
    'h1',
    'h2',
    'h3',
    'a0',
    'a1',
    'a2',
    'a3',
    'a4',
    'a5',
  ]) {
    if (fields[optional] && fields[optional].length >= 0) {
      output[optional] = fields[optional][0]
    }
  }

  return { ok: output }
}

async function postMessage(
  submission: EarlyAccessSubmission,
): Promise<Result<null>> {
  if (typeof SLACK_WEBHOOKS_URL === 'undefined') {
    return { err: new Error('slack webhooks url undefined') }
  }

  let message = {
    text: `New Early Access Signup: ${submission.company_name}`,
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: 'Early Access Signup',
          emoji: true,
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Company:*\n${submission.company_name}\n${submission.company_type}`,
          },
        ],
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Contact:*\n${submission.first_name} ${submission.last_name}\n${submission.email}`,
          },
        ],
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: '```json\n' + JSON.stringify(submission, null, 2) + '\n```',
          },
        ],
      },
    ],
  }

  let res = await fetch(SLACK_WEBHOOKS_URL, {
    method: 'POST',
    body: JSON.stringify(message),
  })

  if (res.status !== 200) {
    return {
      err: new Error('Error submitting message to slack'),
    }
  }

  return {
    ok: null,
  }
}

async function validateTurnstileResponse(
  response: string,
  ip: string,
): Promise<Result<null>> {
  let formData = new FormData()
  formData.append('secret', process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY || '')
  formData.append('response', response)
  formData.append('remoteip', ip)

  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
  const result = await fetch(url, {
    body: formData,
    method: 'POST',
  })

  const outcome: { success: boolean } = await result.json()

  if (outcome.success) {
    return {
      ok: null,
    }
  }

  return {
    err: new Error('cloudflare turnstile response validation failed'),
  }
}
