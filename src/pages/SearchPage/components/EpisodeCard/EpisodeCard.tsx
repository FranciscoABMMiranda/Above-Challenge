import { Button, Typography } from '@components'
import React from 'react'

interface EpisodeCard {
  title: string
  description: string
}

export const EpisodeCard: React.FC<EpisodeCard> = ({ title, description }) => {
  return (
    <div className="flex justify-between rounded-md border-2 border-slate-600 p-4 h-28">
      <img className="w-[15%]" />
      <div className="flex flex-col flex-grow items-start text-left gap-y-2 max-w-[50%]">
        <Typography as="h3" className="text-lg font-bold line-clamp-1">
          {title}
        </Typography>
        <Typography className="text-sm line-clamp-2">{description}</Typography>
      </div>
      <Button className="self-end">View more details</Button>
      <img />
    </div>
  )
}
