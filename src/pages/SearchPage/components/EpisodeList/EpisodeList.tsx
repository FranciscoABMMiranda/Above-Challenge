import { SkeletonProvider, SkeletonWrapper } from '@components'
import { useEpisodeList } from '@services'
import React from 'react'
import { EpisodeCard } from '../EpisodeCard'
import { EpisodeListSkeleton } from './EpisodeListSkeleton'

interface EpisodeListProps {
  search: string
}

export const EpisodeList: React.FC<EpisodeListProps> = ({ search }) => {
  const { data, isLoading, isError } = useEpisodeList({ search })

  if (isError) return null

  return (
    <SkeletonProvider isLoading={isLoading}>
      <section className="flex flex-col gap-5">
        <SkeletonWrapper component={<EpisodeListSkeleton />}>
          {data !== undefined &&
            data.map(({ id, title, description }) => (
              <EpisodeCard
                key={id}
                id={id}
                title={title}
                description={description}
              />
            ))}
        </SkeletonWrapper>
      </section>
    </SkeletonProvider>
  )
}
