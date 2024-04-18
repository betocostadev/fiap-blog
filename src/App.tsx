import { useEffect } from 'react'
import useSWR from 'swr'

import { GET_POSTS_QUERY, getPosts } from './api/posts'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'

function App() {
  const {
    data,
    error,
    isLoading: isLoadingPosts,
  } = useSWR(GET_POSTS_QUERY, { fetcher: getPosts })

  useEffect(() => {
    console.log(data, error, isLoadingPosts)
  })

  return <RouterProvider router={router} />
}

export default App
