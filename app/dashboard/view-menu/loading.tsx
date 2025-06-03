import { Skeleton } from "@/components/ui/skeleton"

export default function ViewMenuLoading() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Skeleton className="h-5 w-5 mr-4" />
            <Skeleton className="h-7 w-40" />
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>

      {/* Search and Filters Skeleton */}
      <div className="bg-white border-b py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 flex-grow rounded-full" />
            <Skeleton className="h-10 w-24 rounded-full" />
          </div>
        </div>
      </div>

      {/* Menu Categories Skeleton */}
      <div className="bg-white border-b py-2 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-full flex-shrink-0" />
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content Skeleton */}
      <div className="max-w-6xl mx-auto py-8 px-6">
        <Skeleton className="h-10 w-40 mb-6" />
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="flex">
                <Skeleton className="w-1/3 h-32" />
                <div className="w-2/3 p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-2/3 mb-3" />
                  <div className="flex gap-1 mb-4">
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-5 w-16 rounded-full" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-8 w-28 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Button Skeleton */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-12 w-full rounded-md" />
        </div>
      </div>
    </div>
  )
}
