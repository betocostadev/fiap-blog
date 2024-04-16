// pages/api/posts.js

import client from '../lib/graphClient'

// export default async function handler(req, res) {
//   const { pageIndex = 1, limit = 3 } = req.query
//   const data = await client.getEntries({
//     content_type: 'posts',
//     skip: pageIndex * limit,
//     order: '-fields.publishDate',
//     limit,
//   })

//   res.json(data)
// }

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
