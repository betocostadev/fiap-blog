import client from '../lib/graphClient'

export const GET_ALL_POSTS = `
query GetAllPosts {
  postCollection {
    items {
      author {
        name
      }
      coverImage {
        url
      }
      date
      excerpt
      title
    }
  }
}
`

export const GET_LATEST_POSTS = `
query GetLatestPosts {
  postCollection (order: date_DESC, limit: 4) {
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
query GetPostsByCategory($slugs: [String!]!) {
  categoriesCollection(where: {slug_in: $slugs}, limit: 25) {
    items {
      linkedFrom {
        postCollection {
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
export const getLatestPosts = async (query: string, variables: any) => {
  try {
    const response = await client.request(query, variables)

    console.log('Latest posts:')
    console.log(response)

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}
