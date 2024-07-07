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

  useEffect(() => {
    window.turnstile.render('#early_access_form', {
      sitekey: process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || '',
    })
  }, [])

  return (
    <div>
      <div className="mb-2">{error && <ErrorAlert />}</div>
      {success ? (
        <SuccessAlert />
      ) : (
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex w-full justify-center pt-8">
            <div className="grid w-full grid-cols-2 gap-4">
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
                  values={['Hotel', 'Travel Agent']}
                  defaultValue={'Hotel'}
                />
              </div>

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
    </div>
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

function RadioGroupField({ name, label, values, defaultValue }) {
  return (
    <div className="space-y-2 text-left">
      <Label htmlFor={name}>{label}</Label>
      <RadioGroup name={name} defaultValue={defaultValue}>
        {values.map((v) => (
          <div key={v} className="flex items-center space-x-2">
            <RadioGroupItem value={v} id="option-one" />
            <Label htmlFor="option-one">{v}</Label>
          </div>
        ))}
      </RadioGroup>
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
