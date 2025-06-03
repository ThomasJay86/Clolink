import { Skeleton } from "@/components/ui/skeleton"
import SharedLayout from "@/components/shared-layout"

export default function Loading() {
  return (
    <SharedLayout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header Skeleton */}
        <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-30">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <Skeleton className="h-5 w-5 mr-4" />
              <Skeleton className="h-7 w-40" />
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton className="h-2 w-2 rounded-full" />
              <Skeleton className="h-2 w-2 rounded-full" />
              <Skeleton className="h-2 w-2 rounded-full" />
              <Skeleton className="h-2 w-2 rounded-full" />
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto py-8 px-6">
          <Skeleton className="h-10 w-40 mb-6" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Skeleton className="h-[400px] w-full rounded-lg" />
            </div>
            <div>
              <Skeleton className="h-[300px] w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </SharedLayout>
  )
}
