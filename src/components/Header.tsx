import { Link } from 'react-router-dom'
import ThemeSelector from './ThemeSelector'

export default function Header() {
  return (
    <header
      className="bg-gray-800 text-white py-2 px-4 flex justify-between items-center"
      role="banner"
    >
      <div className="flex justify-between">
        <h1 className="text-xl font-bold md:text-2xl">
          <Link to="/">FIAP Blog</Link>
        </h1>
      </div>
      <ThemeSelector />
    </header>
  )
}
