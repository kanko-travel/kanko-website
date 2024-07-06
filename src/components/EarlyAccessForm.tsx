import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function EarlyAccessForm({ children }) {
  return (
    <div>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign up for early access</DialogTitle>
            <DialogDescription>
              By signing up for early access you will receive the latest product
              updates before everyone else.
            </DialogDescription>
          </DialogHeader>
          <FormContent />
        </DialogContent>
      </Dialog>
      {/* <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sign up for early access</SheetTitle>
            <SheetDescription>
              By signing up for early access you will receive the latest product
              updates before everyone else.
            </SheetDescription>
            <FormContent />
          </SheetHeader>
        </SheetContent>
      </Sheet> */}
    </div>
  )
}

function FormContent() {
  return (
    <form className="w-full" name="early_access" data-netlify="true">
      <div className="flex w-full justify-center py-8">
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

          <div className="col-span-2 pt-2">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

function Field({ name, label, type = 'text', placeholder = '' }) {
  return (
    <div className="text-left">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  )
}
