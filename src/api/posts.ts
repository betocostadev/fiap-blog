import { IPostCategoryResponse, IPostResponse } from '@/types/posts'
import client from '../lib/graphClient'

export const GET_ALL_POSTS = `
query GetAllPosts {
  postCollection (order: date_DESC, limit: 10) {
    total
    items {
      author {
        name
      }
      categoriesCollection {
        items {
          title
          slug
        }
      }
      coverImage {
        url
      }
      date
      excerpt
      title
      slug
    }
  }
}
`

export const GET_LATEST_POSTS = `
query GetLatestPosts {
  postCollection (order: date_DESC, limit: 4) {
    total
    items {
      author {
        name
      }
      categoriesCollection {
        items {
          title
          slug
        }
      }
      coverImage {
        url
      }
      date
      excerpt
      title
      slug
    }
  }
}
`
export const GET_POSTS_BY_CATEGORY = `
query GetPostsByCategory($slugs: [String]) {
  categoriesCollection(where: {slug_in: $slugs}, limit: 10) {
    items {
      linkedFrom {
        postCollection (order: date_DESC) {
          total
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
    }
  }
}
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPosts = async (query: string, variables: any) => {
  try {
    const response = await client.request(query, variables)

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPostsWithParams = async ([query, variables]: [string, any]) => {
  try {
    const response: IPostResponse = await client.request(query, variables)
    if (response.postCollection.items.length === 0) {
      return []
    } else {
      const data = {
        items: response.postCollection.items,
        total: response.postCollection.total,
      }
      return data
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPostsByCategory = async ([query, variables]: [string, any]) => {
  try {
    const response: IPostCategoryResponse = await client.request(
      query,
      variables
    )

    if (response?.categoriesCollection?.items?.length > 0) {
      const allPosts = response.categoriesCollection.items.flatMap(
        (item) => item.linkedFrom.postCollection.items
      )
      const uniquePosts = Array.from(
        new Set(allPosts.map((post) => JSON.stringify(post)))
      ).map((postString) => JSON.parse(postString))

      const postCollection = {
        items: uniquePosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ),
        total: uniquePosts.length,
      }
      return postCollection
    } else {
      return []
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
