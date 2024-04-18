export interface IcategoriesCollection {
  categoriesCollection: {
    total: number
    items: TCategory[]
  }
}
export type TCategory = { title: string; slug: string }
