import { Button, Input, Textarea } from '@components'
import { useCreateEpisode } from '@services'
import { getId } from '@utils'
import React, { useRef } from 'react'

interface EpisodeFormProps {
  onSuccess: () => void
}

export const EpisodeForm: React.FC<EpisodeFormProps> = ({ onSuccess }) => {
  const formRef = useRef<HTMLFormElement>(null)
  const { mutate } = useCreateEpisode({ onSuccess })

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

    mutate({
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
      <Input label="Series" name="series" required fullWidth />
      <Input label="Episode Title" name="title" required fullWidth />
      <div className="flex gap-4">
        <Input
          label="Season number"
          name="seasonNumber"
          required
          type="number"
          fullWidth
        />
        <Input
          label="Episode number"
          name="episodeNumber"
          required
          type="number"
          fullWidth
        />
      </div>
      <div className="flex gap-4">
        <Input label="Release date" name="releaseDate" fullWidth type="date" />
        <Input label="IMDB ID" name="imdbId" fullWidth />
      </div>
      <Textarea label="Description" name="description" fullWidth />
      <Button type="submit">Create episode</Button>
    </form>
  )
}
