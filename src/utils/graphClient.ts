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
