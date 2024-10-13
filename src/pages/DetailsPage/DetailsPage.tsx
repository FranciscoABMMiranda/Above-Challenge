import { StarFilled } from '@ant-design/icons'
import {
  ModalProvider,
  SkeletonProvider,
  SkeletonWrapper,
  Typography,
} from '@components'
import { useEpisodeDetails, useImdbDetails } from '@services'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { EpisodeModal } from '../EpisodeForm'
import { DetailsSkeleton, HeaderButtons, InfoText } from './components'
import { getEpisodeInfo } from './utils'

export const DetailsPage: React.FC = () => {
  const { pathname } = useLocation()

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

  console.log({ data, imdbData })

  if (isError || isImdbError) return null

  return (
    <SkeletonProvider isLoading={isLoading || isImdbLoading}>
      <ModalProvider>
        <EpisodeModal />
        <main className="flex flex-col items-start gap-y-6">
          <HeaderButtons />
          <SkeletonWrapper component={<DetailsSkeleton />}>
            <section className="flex flex-col md:flex-row justify-between items-start gap-y-4 gap-x-2 w-full">
              <div className="flex flex-col gap-y-5 items-start">
                <Typography as="h1">{data?.title}</Typography>
                <Typography as="h2" className="text-2xl">
                  {`Series: ${data?.series}`}
                </Typography>
                <div className="flex flex-col gap-y-2 flex-wrap text-lg">
                  {getEpisodeInfo(data, imdbData).map(
                    ({ label, value }, index) => (
                      <InfoText
                        key={`episode_info_${index}`}
                        label={label}
                        value={value}
                      />
                    ),
                  )}
                  <InfoText
                    label="IMDB rating"
                    value={
                      <>
                        {`${imdbData?.imdbRating}/10`}
                        <StarFilled className="ml-1" />
                      </>
                    }
                  />
                </div>
              </div>
              <img
                className="w-full md:w-[40%]"
                src={imdbData?.Poster}
                alt={`Poster of the episode`}
              />
            </section>

            <Typography>{data?.description}</Typography>
          </SkeletonWrapper>
        </main>
      </ModalProvider>
    </SkeletonProvider>
  )
}
