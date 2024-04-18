import { GET_CATEGORIES_QUERY, getCategories } from '@/api/categories'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { Skeleton } from './ui/skeleton'
import { TCategory } from '@/types/categories'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const CategoriesLoading = () => {
  return (
    <ul>
      <li>
        <Skeleton className="h-4 my-2 w-[180px]" />
      </li>
      <li>
        <Skeleton className="h-4 my-2 w-[180px]" />
      </li>
      <li>
        <Skeleton className="h-4 my-2 w-[180px]" />
      </li>
    </ul>
  )
}

export default function CategoriesList() {
  const {
    data,
    error,
    isLoading: isLoadingCategories,
  } = useSWR(GET_CATEGORIES_QUERY, { fetcher: getCategories })

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleCategoryClick = (category: TCategory) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category.slug)) {
        return prev.filter((slug) => slug !== category.slug)
      } else {
        return [...prev, category.slug]
      }
    })
    console.log('Selected categories: ', selectedCategories)
  }

  useEffect(() => {
    console.log(data, error, isLoadingCategories)
    console.log('Categories component: ', data)
  })

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Categories</h1>
      {isLoadingCategories ? (
        CategoriesLoading()
      ) : (
        <ToggleGroup type="multiple">
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
