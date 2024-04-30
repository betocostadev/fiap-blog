import {
  GET_ALL_POSTS,
  GET_POSTS_BY_CATEGORY,
  getPostsByCategory,
  getPostsWithParams,
} from '@/api/posts'
import { Button } from '@/components/ui/button'
import CategoriesList from '@/components/CategoriesList'
import PageHeading from '@/components/PageHeading'
import PostCard from '@/components/PostCard'
import PostCardSkeleton from '@/components/PostCardSkeleton'
import { useCategories } from '@/hooks/useCategories'
import { IPostCard } from '@/types/posts'
import React from 'react'
import useSWR from 'swr'

type ResponseData = {
  items: IPostCard[]
  total?: number
}

export default function Posts() {
  const { selectedCategories } = useCategories()
  const [totalPages, setTotalPages] = React.useState(0)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [skip, setSkip] = React.useState(0)
  const [postsPerPage] = React.useState(3)

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
      ? [
          getQuery(),
          {
            slugs: selectedCategories.map((c) => c.slug),
            skip,
            limit: postsPerPage,
          },
        ]
      : [getQuery(), { skip, limit: postsPerPage }],
    getFetcher()
  )

  const fetchPreviousPage = () => {
    setCurrentPage((prev) => prev - 1)
    setSkip((prev) => prev - postsPerPage)
  }

  const fetchNextPage = () => {
    setCurrentPage((prev) => prev + 1)
    setSkip((prev) => prev + postsPerPage)
  }

  React.useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil((data as ResponseData).total! / postsPerPage))
    }
  }, [data, postsPerPage])

  return (
    <section>
      <PageHeading
        title="Welcome to FIAP Blog"
        message="Check our latest posts"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-2 px-5 md:px-8 lg:px-10">
        <div className="col-span-1 md:col-span-2 lg:col-span-3 lg:col-start-2">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold my-2 text-center">Posts</h2>
            <div className="flex flex-col items-center justify-evenly w-full">
              {isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <PostCardSkeleton key={index} />
                ))
              ) : !error && (data as ResponseData)?.total === 0 ? (
                <p className="mt-2 p-4">
                  No posts found for the categories selected. Please, select
                  another category.
                </p>
              ) : (
                !error &&
                (data as ResponseData)?.items?.map(
                  (post: IPostCard, index: number) => (
                    <PostCard key={post.slug} post={post} itemIdx={index} />
                  )
                )
              )}
              <div className="flex justify-evenly w-full mb-4">
                <Button
                  variant="default"
                  className="mb-3 mt-4 px-6"
                  onClick={fetchPreviousPage}
                  disabled={currentPage <= 1}
                >
                  Previous page
                </Button>
                <Button
                  variant="default"
                  className="mb-3 mt-4 px-6"
                  onClick={fetchNextPage}
                  disabled={currentPage >= totalPages}
                >
                  Next page
                </Button>
              </div>
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
