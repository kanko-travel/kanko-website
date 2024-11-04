import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { Suspense, useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Checkbox } from './ui/checkbox'
import { ScrollArea } from './ui/scroll-area'

type RenderParameters = {
  sitekey: string
  theme?: 'light' | 'dark'
  callback?(token: string): void
}

declare global {
  interface Window {
    turnstile: {
      render(container: string | HTMLElement, params: RenderParameters): void
    }
  }
}

const hotelFeatures = [
  'Making more connections',
  'Enabling real-time inventory and booking',
  'Selling add-on services',
  'Easily managing contracts',
]
const agencyFeatures = [
  'Finding the best deals for my clients',
  'Discovering new properties and services',
  'Working better with properties I already work with',
  'Viewing real-time inventory and rates',
  'Making bookings in real-time',
  'Easily managing contracts',
]

const sources = [
  'Referred by someone',
  'Google or search engine',
  'LinkedIn',
  'Travel expo',
  'Other',
]

export default function EarlyAccessForm({ children }) {
  return (
    <div>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign up for early access</DialogTitle>
            <DialogDescription>
              By signing up for early access you get exclusive access to our
              features before everyone else.
            </DialogDescription>
          </DialogHeader>
          <Suspense>
            <FormContent />
          </Suspense>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function FormContent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const [businessType, setBusinessType] = useState('Hotel')
  const [source, setSource] = useState('')

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()

      if (isSubmitting) {
        return
      }

      setIsSubmitting(true)

      console.log('submitting form')

      const myForm = event.target
      const formData = new FormData(myForm)

      fetch('/api/early_access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })
        .then((res) => {
          if (res.status == 200) {
            setSuccess(true)
            setError(false)
          } else {
            setError(true)
            setSuccess(false)
          }
        })
        .catch((_) => {
          setError(true)
        })
        .finally(() => {
          setIsSubmitting(false)
        })
    },
    [isSubmitting, setIsSubmitting],
  )

  const handleChangeBusinessType = useCallback(
    (e) => {
      setBusinessType(e.target.value)
    },
    [setBusinessType],
  )

  const handleChangeSource = useCallback(
    (e) => {
      setSource(e.target.value)
    },
    [setSource],
  )

  useEffect(() => {
    window.turnstile.render('#early_access_form', {
      sitekey: process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || '',
    })
  }, [])

  return (
    <ScrollArea className="max-h-[500px]">
      <div className="mb-2">{error && <ErrorAlert />}</div>
      {success ? (
        <SuccessAlert />
      ) : (
        <form className="w-full px-1" onSubmit={handleSubmit}>
          <div className="flex w-full justify-center pt-8">
            <div className="grid w-full grid-cols-2 gap-5">
              <div className="col-span-2 sm:col-span-1">
                <Field name="first_name" label="First Name" type="text" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Field name="last_name" label="Last Name" type="text" />
              </div>
              <div className="col-span-2">
                <Field name="email" label="Email" type="email" />
              </div>
              <div className="col-span-2">
                <Field name="company_name" label="Company Name" type="text" />
              </div>

              <div className="col-span-2">
                <RadioGroupField
                  name="company_type"
                  label="Company Type"
                  values={['Hotel', 'Travel Agent', 'Other']}
                  defaultValue={'Hotel'}
                  onChange={handleChangeBusinessType}
                />
              </div>

              {(businessType == 'Hotel' || businessType == 'Travel Agent') && (
                <div className="col-span-2">
                  <Label>
                    Which of these features are most important to you?
                  </Label>
                  <div className="mt-2 flex flex-col gap-2">
                    {businessType == 'Hotel'
                      ? hotelFeatures.map((f) => (
                          <CheckboxItem key={f} value={f} />
                        ))
                      : agencyFeatures.map((f) => (
                          <CheckboxItem key={f} value={f} />
                        ))}
                  </div>
                </div>
              )}

              <div className="col-span-2">
                <RadioGroupField
                  name="source"
                  label="Where did you hear about us?"
                  values={sources}
                  defaultValue={'Hotel'}
                  onChange={handleChangeSource}
                />
              </div>

              {source == 'Other' && (
                <div className="col-span-2">
                  <Field
                    name="other_source"
                    label="Please specify"
                    type="text"
                  />
                </div>
              )}

              <div className="col-span-2 flex justify-center pt-2">
                <Button
                  variant={'affirmative'}
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full"
                >
                  {isSubmitting ? <LoadingSpinner /> : 'Submit'}
                </Button>
              </div>

              <div className="col-span-2 mx-auto pt-2">
                <div id="early_access_form" className="checkbox" />
              </div>
            </div>
          </div>
        </form>
      )}
    </ScrollArea>
  )
}

function Field({
  name,
  label,
  type = 'text',
  placeholder = '',
  required = true,
}) {
  return (
    <div className="space-y-0.5 text-left">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

function RadioGroupField({ name, label, values, defaultValue, onChange }) {
  return (
    <div className="space-y-2 text-left">
      <Label htmlFor={name}>{label}</Label>
      <RadioGroup name={name} defaultValue={defaultValue} onChange={onChange}>
        {values.map((v) => (
          <div key={v} className="flex items-center space-x-2">
            <RadioGroupItem value={v} />
            <Label className="font-normal">{v}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

function CheckboxItem({ value }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox name={value} />
      <label className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {value}
      </label>
    </div>
  )
}

function SuccessAlert() {
  return (
    <Alert variant={'affirmative'}>
      {/* <RocketIcon className="h-4 w-4" /> */}
      <AlertTitle>Thanks for your interest!</AlertTitle>
      <AlertDescription>
        You have successfully joined our early access programme.
      </AlertDescription>
    </Alert>
  )
}

function ErrorAlert() {
  return (
    <Alert variant={'destructive'}>
      <AlertTitle>Oops, something went wrong.</AlertTitle>
      <AlertDescription>
        We were unable to process your request. Please try submitting the form
        again. Thank you for your patience.
      </AlertDescription>
    </Alert>
  )
}

const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('animate-spin', className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}
