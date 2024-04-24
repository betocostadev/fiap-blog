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
import { IPostCard } from '@/types/posts'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useSWR from 'swr'

type ResponseData = {
  items: IPostCard[]
  total?: number
}

export default function Posts() {
  const location = useLocation()
  const [routedCategory, setRoutedCategory] = useState('')

  const getQuery = () => {
    if (routedCategory) {
      return GET_POSTS_BY_CATEGORY
    } else {
      return GET_ALL_POSTS
    }
  }

  const getFetcher = () => {
    if (routedCategory) {
      return getPostsByCategory
    } else {
      return getPostsWithParams
    }
  }

  useEffect(() => {
    console.log(location.state)
    if (location.state.category) {
      // setRoutedCategory(location.state.category)
      setRoutedCategory(location.state.category)
      console.log('Routed category', routedCategory)
    }
  }, [location, routedCategory])

  const { data, error, isLoading } = useSWR(
    routedCategory ? [getQuery(), { slugs: routedCategory }] : null,
    getFetcher()
  )

  useEffect(() => {
    console.log('Posts page - Query')
    console.log(data, error, isLoading)
  })

  return (
    <section>
      <PageHeading
        title="Welcome to FIAP Blog"
        message="Check our latest posts"
      />
      <h2 className="text-xl font-bold m-2 text-center">Posts</h2>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-evenly w-full">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <PostCardSkeleton key={index} />
              ))
            : !error &&
              (data as ResponseData)?.items?.map(
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
