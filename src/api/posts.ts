import client from '../lib/graphClient'

export const GET_POSTS_QUERY = `
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
export const GET_POSTS_BY_CATEGORY_QUERY = `
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
          }
        }
      }
    }
  }
}
`

export const getPosts = async (query, variables) => {
  try {
    const response = await client.request(query, variables)

    console.log('Posts response')
    console.log(response)

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}
