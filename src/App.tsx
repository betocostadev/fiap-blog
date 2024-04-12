import { useEffect } from 'react'
import useSWR from 'swr'

import './App.css'
import { getPosts } from './api/posts'

function App() {
  const GET_POSTS = `
   query {
    postCollection {
      items {
        author {
          name
        }
        categoriesCollection {
          items {
            title
          }
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

  const {
    data,
    error,
    isLoading: isLoadingPosts,
  } = useSWR(GET_POSTS, { fetcher: getPosts })

  useEffect(() => {
    console.log(data, error, isLoadingPosts)
  })

  return (
    <>
      <main>
        <h2>Software Engineering Blog</h2>
      </main>
    </>
  )
}

export default App
