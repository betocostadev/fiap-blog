import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { ThemeProvider } from './components/ThemeProvider'
import { SelectedCategoriesProvider } from './providers/CategoriesProvider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SelectedCategoriesProvider>
        <RouterProvider router={router} />
      </SelectedCategoriesProvider>
    </ThemeProvider>
  )
}

export default App
