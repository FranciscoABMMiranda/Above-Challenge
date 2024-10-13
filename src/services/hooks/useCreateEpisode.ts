import { useMutation } from 'react-query'
import { createEpisode } from '../api'
import { EpisodeDetails } from '../models'
import { EPISODE_LIST, queryClient } from '../utils'

interface UseCreateEpisode {
  onSuccess: () => void
}

export const useCreateEpisode = ({ onSuccess }: UseCreateEpisode) => {
  const { mutate, isLoading } = useMutation(
    (episode: EpisodeDetails) => createEpisode({ episode }),
    {
      onSuccess: () => {
        onSuccess()
        queryClient.invalidateQueries(EPISODE_LIST)
      },
      onError: (error) => {
        console.error('Error creating episode:', error)
      },
    },
  )

  return {
    mutate,
    isLoading,
  }
}
