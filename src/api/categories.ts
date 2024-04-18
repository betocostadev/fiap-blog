import { IcategoriesCollection } from '@/types/categories'
import client from '../lib/graphClient'

export const GET_CATEGORIES_QUERY = `
  query {
    categoriesCollection {
      total
      items {
        title
        slug
      }
    }
  }
`

export const getCategories = async (query, variables) => {
  try {
    const response: IcategoriesCollection = await client.request(
      query,
      variables
    )

    console.log('Categories response')
    console.log(response)

    return {
      items: response.categoriesCollection.items,
      total: response.categoriesCollection.total,
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
