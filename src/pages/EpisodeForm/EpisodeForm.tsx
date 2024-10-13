import { Button, Input, Textarea } from '@components'
import { EpisodeDetails } from '@services'
import { getId } from '@utils'
import React, { useRef } from 'react'

export interface EpisodeFormProps {
  isEdit?: boolean
  data?: EpisodeDetails
  onSubmitData: (episode: EpisodeDetails) => void
}

export const EpisodeForm: React.FC<EpisodeFormProps> = ({
  isEdit = false,
  data,
  onSubmitData,
}) => {
  const formRef = useRef<HTMLFormElement>(null)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const series = formData.get('series') as string
    const title = formData.get('title') as string
    const seasonNumber = Number(formData.get('seasonNumber'))
    const episodeNumber = Number(formData.get('episodeNumber'))
    const releaseDate = formData.get('releaseDate') as string
    const imdbId = formData.get('imdbId') as string
    const description = formData.get('description') as string

    onSubmitData({
      id: getId(),
      series,
      title,
      seasonNumber,
      episodeNumber,
      releaseDate,
      imdbId,
      description,
    })
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="flex flex-col gap-4 w-full items-stretch">
      <Input
        label="Series"
        name="series"
        required
        fullWidth
        defaultValue={data?.series}
      />
      <Input
        label="Episode Title"
        name="title"
        required
        fullWidth
        defaultValue={data?.title}
      />
      <div className="flex gap-4">
        <Input
          label="Season number"
          name="seasonNumber"
          required
          type="number"
          fullWidth
          defaultValue={data?.seasonNumber}
        />
        <Input
          label="Episode number"
          name="episodeNumber"
          required
          type="number"
          fullWidth
          defaultValue={data?.episodeNumber}
        />
      </div>
      <div className="flex gap-4">
        <Input
          label="Release date"
          name="releaseDate"
          fullWidth
          type="date"
          defaultValue={data?.releaseDate}
        />
        <Input
          label="IMDB ID"
          name="imdbId"
          fullWidth
          defaultValue={data?.imdbId}
        />
      </div>
      <Textarea
        label="Description"
        name="description"
        fullWidth
        defaultValue={data?.description}
      />
      <Button type="submit">
        {isEdit ? 'Update episode' : 'Create episode'}
      </Button>
    </form>
  )
}
