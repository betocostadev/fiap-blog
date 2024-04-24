import { SelectedCategoriesContext } from '@/contexts/CategoriesContext'
import { TCategory } from '@/types/categories'
import { useState } from 'react'

export const SelectedCategoriesProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState<TCategory[]>([])
  const clearSelectedCategories = () => setSelectedCategories([])

  const handleSetSelectedCategories = (category: TCategory) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.some((item) => item.slug === category.slug)) {
        return prevCategories.filter((item) => item.slug !== category.slug)
      } else {
        return [...prevCategories, category]
      }
    })
  }

  return (
    <SelectedCategoriesContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories: handleSetSelectedCategories,
        clearSelectedCategories,
      }}
    >
      {children}
    </SelectedCategoriesContext.Provider>
  )
}
