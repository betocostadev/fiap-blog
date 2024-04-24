import { TCategory } from '@/types/categories'
import React from 'react'

export const SelectedCategoriesContext = React.createContext<{
  selectedCategories: TCategory[]
  setSelectedCategories: (category: TCategory) => void
}>({
  selectedCategories: [],
  setSelectedCategories: () => {},
})
