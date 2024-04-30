import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { IPostCard } from '@/types/posts'
import { getPostDate } from '@/lib/dateUtils'
import { useNavigate } from 'react-router-dom'

export default function PostCard({
  post,
  itemIdx,
}: {
  post: IPostCard
  itemIdx: number
}) {
  const navigate = useNavigate()

  return (
    <Card
      className="mt-4 mx-2 cursor-pointer"
      onClick={() => navigate(`/posts/${post.slug}`)}
    >
      <CardHeader className="p-0 mb-2">
        <img
          src={post.coverImage.url}
          alt="Image"
          className="rounded-md object-contain"
        />
      </CardHeader>
      <CardContent className="mt-2 p-4">
        <p className="text-md font-bold my-1">{post.title}</p>
        <p className="text-sm">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-4">
        <div className="flex justify-between w-full">
          <div>
            {post.categoriesCollection.items.map((category) => (
              <Badge
                key={`bg-${itemIdx}-${category.slug}`}
                className="mr-1 font-thin"
                variant="outline"
              >
                {category.title}
              </Badge>
            ))}
          </div>
          <div className="ml-1 font-thin text-sm text-right">
            <p>
              <em>{post.author.name}</em>
            </p>
            <p>{getPostDate(post.date)}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
