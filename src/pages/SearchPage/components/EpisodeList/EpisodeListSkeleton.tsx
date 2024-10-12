import React from 'react'
import { EpisodeCardSkeleton } from '../EpisodeCard'

export const EpisodeListSkeleton: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <EpisodeCardSkeleton />
      <EpisodeCardSkeleton />
      <EpisodeCardSkeleton />
    </div>
  )
}
