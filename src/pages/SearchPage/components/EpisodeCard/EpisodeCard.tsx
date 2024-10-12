import { Button, Typography } from '@components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface EpisodeCard {
  id: string
  title: string
  description: string
}

export const EpisodeCard: React.FC<EpisodeCard> = ({
  id,
  title,
  description,
}) => {
  const navigate = useNavigate()

  const handleViewDetails = () => navigate(id)

  return (
    <div className="flex justify-between rounded-md border-2 border-slate-600 p-4 h-28">
      <div className="flex flex-col flex-grow items-start text-left gap-y-2 max-w-[50%]">
        <Typography as="h3" className="text-lg font-bold line-clamp-1">
          {title}
        </Typography>
        <Typography className="text-sm line-clamp-2">{description}</Typography>
      </div>
      <Button onClick={handleViewDetails} className="self-end">
        View more details
      </Button>
    </div>
  )
}
