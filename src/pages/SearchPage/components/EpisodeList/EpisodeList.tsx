import { SkeletonProvider, SkeletonWrapper } from '@components'
import { useEpisodeList } from '@services'
import React from 'react'
import { EpisodeCard } from '../EpisodeCard'
import { EpisodeListSkeleton } from './EpisodeListSkeleton'

export const EpisodeList: React.FC = () => {
  const { data, isLoading, isError } = useEpisodeList()

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
