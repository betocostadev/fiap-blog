import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">
        <Link to="/">FIAP Blog</Link>
      </h1>
    </header>
  )
}
