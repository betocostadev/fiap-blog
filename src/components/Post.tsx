import { IPost } from '@/types/posts'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import { getPostDate } from '@/lib/dateUtils'
import { Badge } from './ui/badge'

export default function PostComponent({ post }: { post: IPost }) {
  return (
    <div className="mt-4">
      <img src={post.coverImage.url} alt="Cover" className="w-full" />
      <h1 className="text-4xl font-bold mt-6">{post.title}</h1>
      <div className="flex sm:flex-col">
        <p className="text-slate-400 mt-4 mb-6 flex-1">
          {getPostDate(post.date)} by {post.author.name}
        </p>
        <div>
          {post.categoriesCollection.items.map((category) => (
            <Badge key={category.slug} className="mr-2">
              {category.title}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-6 [&>p]:mb-8 [&>h2]:font-extrabold">
        {documentToReactComponents(post.content.json as Document)}
      </div>
    </div>
  )
}
