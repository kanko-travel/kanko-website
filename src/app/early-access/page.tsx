import { Container } from '@/components/Container'
import EarlyAccessForm from '@/components/EarlyAccessForm'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Header basic={true} />
      <main className="">
        <div className="mt-16 w-full">
          <Container>
            <div className="mx-auto max-w-2xl py-16">
              <div className="rounded-lg border border-slate-200 px-12 py-8">
                <div className="mb-8 flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                    Sign up for early access
                  </h1>
                  <span className="text-lg md:text-xl lg:text-2xl">
                    Fill out the form below to gain exclusive access to new
                    features before everyone else
                  </span>
                </div>
                <Suspense>
                  <EarlyAccessForm />
                </Suspense>
              </div>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  )
}
