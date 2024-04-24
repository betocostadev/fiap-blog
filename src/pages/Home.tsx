import CategoriesList from '@/components/CategoriesList'
import PageHeading from '@/components/PageHeading'
import PostCardSkeleton from '@/components/PostCardSkeleton'
import { useEffect } from 'react'
import { GET_LATEST_POSTS, getPosts } from '@/api/posts'
import useSWR from 'swr'
import { IPostCard } from '@/types/posts'
import PostCard from '@/components/PostCard'

export default function Home() {
  const {
    data,
    error,
    isLoading: isLoadingPosts,
  } = useSWR(GET_LATEST_POSTS, { fetcher: getPosts })

  useEffect(() => {
    console.log(data, error, isLoadingPosts)
  })

  return (
    <section>
      <PageHeading
        title="Welcome to FIAP Blog"
        message="Frontend? Backend? We've got you covered, check the latest news in development"
      />
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
        </div>
        <aside>
          <CategoriesList />
        </aside>
      </div>
    </section>
  )
}
