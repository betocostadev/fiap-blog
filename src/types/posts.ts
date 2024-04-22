import { Author } from './authors'
import { TCategory } from './categories'

export interface IPostCard {
  date: string
  excerpt: string
  title: string
  author: Author
  slug: string
  coverImage: {
    url: string
  }
  categoriesCollection: {
    items: TCategory[]
  }
}
