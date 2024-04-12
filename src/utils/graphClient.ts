import { GraphQLClient } from 'graphql-request'

const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

const endpoint = baseUrl

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${apiKey}`,
  },
})

export default client

// const fetcher = async (query, variables) => {
//   try {
//     // const headers = {
//     //   authorization: 'Bearer CuWOlYh_ZJspg1JGxE3jPvw7jrjYQIe9vDWaNw8Wjek',
//     //   'content-type': 'application/json',
//     // }

//     const response = await client.request(query, variables)
//     // const response = await client.request(query, variables, headers)
//     console.log(response)
//     return response.data
//   } catch (error) {
//     console.error(error)
//     throw error
//   }
// }

// export default fetcher
