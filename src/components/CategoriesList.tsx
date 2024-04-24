import { GET_CATEGORIES_QUERY, getCategories } from '@/api/categories'
import { useEffect } from 'react'
import useSWR from 'swr'
import { Skeleton } from './ui/skeleton'
import { TCategory } from '@/types/categories'
import { useLocation, useNavigate } from 'react-router-dom'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useCategories } from '@/hooks/useCategories'

export default function CategoriesList() {
  const {
    data,
    error,
    isLoading: isLoadingCategories,
  } = useSWR(GET_CATEGORIES_QUERY, { fetcher: getCategories })

  const location = useLocation()
  const navigate = useNavigate()

  const { selectedCategories, setSelectedCategories } = useCategories()

  const handleCategoryClick = (category: TCategory) => {
    console.log('Categories List selector')
    setSelectedCategories(category)
    console.log(selectedCategories)
    if (location.pathname === '/') {
      navigate('/posts')
    }
  }

  const updateDataToggle = () => {
    // Add data-state attribute to the selected category
    return
    // const element = document.querySelector(
    //   `[aria-label="Toggle ${selectedCategory.title}"]`
    // )
    // if (element) {
    //   element.setAttribute('data-state', 'on')
    // }
  }

  useEffect(() => {
    if (selectedCategories) {
      updateDataToggle()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <div className="p-2 w-full mt-2">
      <h2 className="text-xl font-bold text-center mb-2">Categories</h2>
      {isLoadingCategories ? (
        <div className="flex flex-wrap w-full items-center justify-center">
          <Skeleton className="h-4 m-2 w-1/3" />
          <Skeleton className="h-4 m-2 w-1/3" />
          <Skeleton className="h-4 m-2 w-1/3" />
          <Skeleton className="h-4 m-2 w-1/3" />
        </div>
      ) : (
        <ToggleGroup
          type="multiple"
          className="flex flex-wrap w-full items-center justify-center"
        >
          {!isLoadingCategories &&
            !error &&
            data?.items?.map((category: TCategory) => (
              <ToggleGroupItem
                onClick={() => handleCategoryClick(category)}
                key={category.slug}
                value={category.slug}
                aria-label={`Toggle ${category.title}`}
              >
                <p>{category.title}</p>
              </ToggleGroupItem>
            ))}
        </ToggleGroup>
      )}
    </div>
  )
}
