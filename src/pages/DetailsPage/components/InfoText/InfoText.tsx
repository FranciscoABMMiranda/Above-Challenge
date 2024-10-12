import { Typography } from '@components'
import React from 'react'

interface InfoTextProps {
  label: string
  value?: string | number | React.ReactElement
}

export const InfoText: React.FC<InfoTextProps> = ({ label, value }) => {
  if (value === undefined) return null

  return (
    <div>
      {`${label}:`}
      {
        <Typography className="font-bold ml-1" as="span">
          {value}
        </Typography>
      }
    </div>
  )
}
