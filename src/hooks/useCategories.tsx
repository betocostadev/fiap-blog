import { SelectedCategoriesContext } from '@/contexts/CategoriesContext'
import { useContext } from 'react'

export const useCategories = () => {
  const { selectedCategories, setSelectedCategories, clearSelectedCategories } =
    useContext(SelectedCategoriesContext)

  return { selectedCategories, setSelectedCategories, clearSelectedCategories }
}
