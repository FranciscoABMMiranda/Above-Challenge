import { SkeletonProvider, SkeletonWrapper, useModal } from '@components'
import { useEpisodeDetails, useImdbDetails, useUpdateEpisode } from '@services'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { EpisodeModal } from '../EpisodeForm'
import { DetailsSkeleton, EpisodeInfo, HeaderButtons } from './components'

export const DetailsPage: React.FC = () => {
  const { pathname } = useLocation()
  const { closeModal } = useModal()

  const { data, isLoading, isError } = useEpisodeDetails({
    episodeId: pathname.substring(1),
  })

  const {
    data: imdbData,
    isLoading: isImdbLoading,
    isError: isImdbError,
  } = useImdbDetails({
    id: data?.imdbId,
    enabled: !(isLoading || data?.imdbId === undefined),
  })

  const handleUpdateSuccess = () => {
    alert('Episode updated successfully!')
    closeModal()
  }

  const { mutate } = useUpdateEpisode({
    onSuccess: handleUpdateSuccess,
  })

  if (isError || isImdbError) return null

  return (
    <SkeletonProvider isLoading={isLoading || isImdbLoading}>
      <EpisodeModal isEdit onSubmitData={mutate} data={data} />
      <main className="flex flex-col items-start gap-y-6">
        <HeaderButtons episodeId={data?.id ?? ''} />
        <SkeletonWrapper component={<DetailsSkeleton />}>
          {data !== undefined && imdbData !== undefined && (
            <EpisodeInfo data={data} imdbData={imdbData} />
          )}
        </SkeletonWrapper>
      </main>
    </SkeletonProvider>
  )
}
