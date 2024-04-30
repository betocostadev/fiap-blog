import { Link } from 'react-router-dom'
import ThemeSelector from './ThemeSelector'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4" role="banner">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">FIAP Blog</Link>
        </h1>
        <ThemeSelector />
      </div>
    </header>
  )
}
