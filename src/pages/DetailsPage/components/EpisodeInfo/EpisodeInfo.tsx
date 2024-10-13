import { StarFilled } from '@ant-design/icons'
import { Typography } from '@components'
import { EpisodeDetails, ImdbDetails } from '@services'
import React from 'react'
import { getEpisodeInfo } from '../../utils'
import { InfoText } from '../InfoText'

interface EpisodeInfoProps {
  data: EpisodeDetails
  imdbData: ImdbDetails
}

export const EpisodeInfo: React.FC<EpisodeInfoProps> = ({ data, imdbData }) => {
  return (
    <section className="flex flex-col gap-y-6">
      <section className="flex flex-col md:flex-row justify-between items-start gap-y-4 gap-x-2 w-full">
        <div className="flex flex-col gap-y-5 items-start">
          <Typography as="h1">{data.title}</Typography>
          <Typography as="h2" className="text-2xl">
            {`Series: ${data.series}`}
          </Typography>
          <div className="flex flex-col gap-y-2 flex-wrap text-lg">
            {getEpisodeInfo(data, imdbData).map(({ label, value }, index) => (
              <InfoText
                key={`episode_info_${index}`}
                label={label}
                value={value}
              />
            ))}
            <InfoText
              label="IMDB rating"
              value={
                <>
                  {`${imdbData.imdbRating}/10`}
                  <StarFilled className="ml-1" />
                </>
              }
            />
          </div>
        </div>
        <img
          className="w-full md:w-[40%]"
          src={imdbData.Poster}
          alt={`Poster of the episode`}
        />
      </section>
      <Typography>{data.description}</Typography>
    </section>
  )
}
