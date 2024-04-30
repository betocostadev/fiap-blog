import { GET_POST_BY_SLUG, getPostBySlug } from '@/api/post'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import { IPost } from '@/types/posts'
import { Button } from '@/components/ui/button'
import PostComponent from '@/components/Post'
import CategoriesList from '@/components/CategoriesList'

export default function Post() {
  const [postSlug, setPostSlug] = useState('')
  const [post, setPost] = useState<IPost | null>(null)

  const { data, error, isLoading } = useSWR(
    [GET_POST_BY_SLUG, { slug: postSlug }],
    {
      fetcher: getPostBySlug,
    }
  )

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setPostSlug(location.pathname.split('/posts/').pop() || '')
    if (!isLoading && !error && data) {
      setPost(data.items[0])
    }
  }, [location, data, error, isLoading])

  if (error) return <div>Failed to load post</div>

  if (!post) return <div>Loading...</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-x-3 px-5 md:px-10">
      <div className="col-span-1 md:col-span-3 lg:col-span-4 lg:col-start-2">
        {!error && !isLoading && post && <PostComponent post={post} />}
        <Button
          variant="default"
          className="mb-3 mt-4 px-6"
          onClick={() => navigate('/posts')}
        >
          Back to posts
        </Button>
      </div>
      <aside className="col-span-1">
        <CategoriesList />
      </aside>
    </div>
  )
}
