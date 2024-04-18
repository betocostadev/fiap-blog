import CategoriesList from '@/components/CategoriesList'
import { Skeleton } from '@/components/ui/skeleton'

export default function Home() {
  return (
    <main className="max-w-full max-h-full overflow-hidden">
      <h2 className="text-xl font-bold m-2">Últimos Posts</h2>
      <div className="flex w-3/4 items-center">
        <div className="flex justify-between w-3/4">
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
        <aside>
          <CategoriesList />
        </aside>
      </div>
    </main>
  )
}
