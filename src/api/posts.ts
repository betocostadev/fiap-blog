// pages/api/posts.js

import client from '../utils/graphClient'

// export default async function handler(req, res) {
//   const { pageIndex = 1, limit = 3 } = req.query
//   const data = await client.getEntries({
//     authorization: 'Bearer b4c0n73n7fu1',
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
