import { GET_POST_BY_SLUG, getPostBySlug } from '@/api/post'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useSWR from 'swr'

export default function Post() {
  const [postSlug, setPostSlug] = useState('')

  const { data, error, isLoading } = useSWR(
    [GET_POST_BY_SLUG, { slug: postSlug }],
    {
      fetcher: getPostBySlug,
    }
  )

  const location = useLocation()

  useEffect(() => {
    setPostSlug(location.pathname.split('/posts/').pop() || '')
    console.log(data, error, isLoading)
  })

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Post</h1>
      <p>Post content</p>
    </div>
  )
}
