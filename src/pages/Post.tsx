import { GET_POST_BY_SLUG, getPostBySlug } from '@/api/post'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import { IPost } from '@/types/posts'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-x-2 px-5 md:px-8 lg:px-10">
      <div className="col-span-1 md:col-span-3 lg:col-span-4 lg:col-start-2">
        {!error && (
          <div className="flex justify-center items-center h-12">
            Failed to load post, please try again later.
          </div>
        )}
        {isLoading && (
          <div className="flex justify-center items-center h-screen">
            <Loader2 className="mr-2 h-10 w-10 animate-spin text-4xl" />
          </div>
        )}
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
