import CategoriesList from '@/components/CategoriesList'
import PageHeading from '@/components/PageHeading'
import PostCardSkeleton from '@/components/PostCardSkeleton'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { GET_LATEST_POSTS, getPosts } from '@/api/posts'
import useSWR from 'swr'
import { IPostCard } from '@/types/posts'
import PostCard from '@/components/PostCard'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const {
    data,
    error,
    isLoading: isLoadingPosts,
  } = useSWR(GET_LATEST_POSTS, { fetcher: getPosts })

  const navigate = useNavigate()

  return (
    <section>
      <PageHeading
        title="Welcome to FIAP Blog"
        message="Frontend? Backend? We've got you covered, check the latest news in development"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-2 px-5 md:px-8 lg:px-10">
        <div className="col-span-1 md:col-span-2 lg:col-span-3 lg:col-start-2">
          <h2 className="text-xl font-bold m-2 text-center">Latest Posts</h2>
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-evenly w-full">
              {isLoadingPosts
                ? Array.from({ length: 4 }).map((_, index) => (
                    <PostCardSkeleton key={index} />
                  ))
                : !error &&
                  data?.postCollection.items.map(
                    (post: IPostCard, index: number) => (
                      <PostCard key={post.slug} post={post} itemIdx={index} />
                    )
                  )}
              {isLoadingPosts ? (
                <Button disabled className="my-4 px-6">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button
                  variant="default"
                  className="mb-3 mt-4 px-6"
                  onClick={() => navigate('/posts')}
                >
                  Check all posts
                </Button>
              )}
            </div>
          </div>
        </div>
        <aside className="col-span-1 lg:col-span-2">
          <CategoriesList />
        </aside>
      </div>
    </section>
  )
}
