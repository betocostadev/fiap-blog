import {
  GET_ALL_POSTS,
  GET_POSTS_BY_CATEGORY,
  getPostsByCategory,
  getPostsWithParams,
} from '@/api/posts'
import CategoriesList from '@/components/CategoriesList'
import PageHeading from '@/components/PageHeading'
import PostCard from '@/components/PostCard'
import PostCardSkeleton from '@/components/PostCardSkeleton'
import { useCategories } from '@/hooks/useCategories'
import { IPostCard } from '@/types/posts'
import useSWR from 'swr'

type ResponseData = {
  items: IPostCard[]
  total?: number
}

export default function Posts() {
  const { selectedCategories } = useCategories()

  const getQuery = () => {
    if (selectedCategories?.length) {
      return GET_POSTS_BY_CATEGORY
    } else {
      return GET_ALL_POSTS
    }
  }

  const getFetcher = () => {
    if (selectedCategories?.length) {
      return getPostsByCategory
    } else {
      return getPostsWithParams
    }
  }

  const { data, error, isLoading } = useSWR(
    selectedCategories?.length
      ? [getQuery(), { slugs: selectedCategories.map((c) => c.slug) }]
      : [getQuery()],
    getFetcher()
  )

  return (
    <section>
      <PageHeading
        title="Welcome to FIAP Blog"
        message="Check our latest posts"
      />
      <h2 className="text-xl font-bold m-2 text-center">Posts</h2>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-evenly w-full">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <PostCardSkeleton key={index} />
            ))
          ) : !error && (data as ResponseData)?.items?.length === 0 ? (
            <p className="mt-2 p-4">
              No posts found for the categories selected. Please, select another
              category.
            </p>
          ) : (
            !error &&
            (data as ResponseData)?.items?.map(
              (post: IPostCard, index: number) => (
                <PostCard key={post.slug} post={post} itemIdx={index} />
              )
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
