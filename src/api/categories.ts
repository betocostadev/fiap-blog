import { IcategoriesCollection } from '@/types/categories'
import client from '../lib/graphClient'

export const GET_CATEGORIES_QUERY = `
  query GetAllCategories {
    categoriesCollection {
      total
      items {
        title
        slug
      }
    }
  }
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getCategories = async (query: string, variables: any) => {
  try {
    const response: IcategoriesCollection = await client.request(
      query,
      variables
    )

    return {
      items: response.categoriesCollection.items,
      total: response.categoriesCollection.total,
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
