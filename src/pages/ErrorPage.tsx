import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useRouteError } from 'react-router-dom'

type ErrorType = {
  statusText: string
  message: string
}

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <Header />
      <div id="error-page" className="text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>
            {(error as ErrorType)?.statusText || (error as ErrorType)?.message}
          </i>
        </p>
      </div>
      <Footer />
    </>
  )
}
