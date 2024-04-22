import { Skeleton } from '@/components/ui/skeleton'

export default function PostCardSkeleton() {
  return (
    <div className="flex flex-col space-y-3 mt-4 w-3/4">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
