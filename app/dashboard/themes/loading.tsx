import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function ThemesLoading() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar Skeleton */}
        <div className="hidden md:flex w-64 flex-col bg-white border-r">
          <div className="p-4 border-b">
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="flex-1 overflow-auto py-2">
            <div className="space-y-1 px-2">
              {[...Array(10)].map((_, i) => (
                <Skeleton key={i} className="h-10 w-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header Skeleton */}
          <header className="bg-white shadow-sm z-10">
            <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-9 w-32" />
            </div>
          </header>

          {/* Main Content Skeleton */}
          <main className="flex-1 overflow-auto bg-gray-100 p-4 sm:p-6 lg:p-8">
            {/* Active Theme Skeleton */}
            <section className="mb-8">
              <Skeleton className="h-6 w-32 mb-4" />
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="w-16 h-24 rounded-lg" />
                    <div className="flex-1">
                      <Skeleton className="h-6 w-48 mb-2" />
                      <Skeleton className="h-4 w-64 mb-2" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                    <div className="flex space-x-2">
                      <Skeleton className="h-9 w-20" />
                      <Skeleton className="h-9 w-24" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Templates Grid Skeleton */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-6 w-20" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <Skeleton className="aspect-[1/2] w-full rounded-lg mb-4" />
                      <div className="space-y-3">
                        <div>
                          <Skeleton className="h-5 w-32 mb-1" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-3 w-24" />
                        </div>
                        <div className="flex space-x-2">
                          <Skeleton className="h-8 flex-1" />
                          <Skeleton className="h-8 w-8" />
                          <Skeleton className="h-8 w-8" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
