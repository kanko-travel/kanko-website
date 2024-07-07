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
  }

  console.log(Object.keys(output))

  for (let field of Object.keys(output)) {
    if (!fields[field] || fields[field].length <= 0) {
      return { err: new Error(`missing value for ${field} field`) }
    }

    output[field] = fields[field][0]
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
          text: 'New Signup',
          emoji: true,
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'plain_text',
            text: `${submission.company_name}`,
          },
        ],
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Submitted by:*\n${submission.first_name} ${submission.last_name}`,
          },
          {
            type: 'plain_text',
            text: `${submission.email}`,
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
