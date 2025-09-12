import type React from "react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

// Loading skeleton for application cards
export const AppCardSkeleton: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="flex flex-col gap-2 ml-4">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-20" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Skeleton className="aspect-video w-full mb-4" />
        <div className="flex gap-2">
          <Skeleton className="h-8 flex-1" />
          <Skeleton className="h-8 w-8" />
        </div>
      </CardContent>
    </Card>
  )
}

// Loading skeleton for sidebar items
export const SidebarItemSkeleton: React.FC = () => {
  return (
    <div className="flex items-center gap-2 p-2">
      <Skeleton className="w-4 h-4" />
      <Skeleton className="h-4 flex-1" />
    </div>
  )
}

// Loading skeleton for app viewer
export const AppViewerSkeleton: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-border p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-3">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-20" />
            </div>
            <Skeleton className="h-4 w-96" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-32" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-6">
        <Card className="h-full">
          <CardContent className="p-6 h-full">
            <Skeleton className="w-full h-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
