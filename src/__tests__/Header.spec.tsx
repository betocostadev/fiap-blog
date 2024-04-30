import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '@/components/Header'

test('renders Header component with ThemeSelector', () => {
  render(
    <Router>
      <Header />
    </Router>
  )

  // Check if header is rendered
  const headerElement = screen.getByRole('banner')
  expect(headerElement).toBeDefined()

  // Check if ThemeSelector is rendered
  const themeSelectorElement = screen.findByTestId('toggle-theme')
  expect(themeSelectorElement).toBeTruthy()
})
