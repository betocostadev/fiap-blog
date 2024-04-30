import { Author } from './authors'
import { TCategory } from './categories'
import { Document } from '@contentful/rich-text-types'

export interface IPost {
  date: string
  excerpt: string
  title: string
  author: Author
  slug: string
  content: {
    json: Document
  }
  coverImage: {
    url: string
  }
  categoriesCollection: {
    items: TCategory[]
  }
}
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

export interface IPostCategoryResponse {
  categoriesCollection: {
    items: ICategoryItem[]
  }
}

export interface IPostsResponse {
  postCollection: {
    total: number
    items: IPostCard[]
  }
}

export interface IPostResponse {
  postCollection: {
    items: IPost
  }
}

interface ICategoryItem {
  linkedFrom: {
    postCollection: {
      total: number
      items: IPostCard[]
    }
  }
}
