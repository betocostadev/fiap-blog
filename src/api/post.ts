import client from '@/lib/graphClient'
import { IPostResponse } from '@/types/posts'

export const GET_POST_BY_SLUG = `
query GetPostBySlug($slug: String!) {
  postCollection(where: {slug: $slug}) {
    items {
      title
      excerpt
      date
      slug
      coverImage {
        url
      }
      author {
        name
      }
      categoriesCollection {
        items {
          title
          slug
        }
      }
    }
  }
}
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPostBySlug = async ([query, variables]: [string, any]) => {
  try {
    const response: IPostResponse = await client.request(query, variables)

    const data = {
      items: response.postCollection.items,
      total: response.postCollection.total,
    }
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
