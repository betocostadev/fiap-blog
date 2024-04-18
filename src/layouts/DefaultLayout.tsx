import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function DefaultLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
