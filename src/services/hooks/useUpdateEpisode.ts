import { useMutation } from 'react-query'
import { updateEpisode } from '../api'
import { EpisodeDetails } from '../models'
import { EPISODE_DETAILS, EPISODE_LIST, queryClient } from '../utils'

interface UseUpdateEpisode {
  onSuccess: () => void
}

export const useUpdateEpisode = ({ onSuccess }: UseUpdateEpisode) => {
  const { mutate, isLoading } = useMutation(
    (episode: EpisodeDetails) => updateEpisode({ episode }),
    {
      onSuccess: () => {
        onSuccess()
        queryClient.invalidateQueries(EPISODE_LIST)
        queryClient.invalidateQueries(EPISODE_DETAILS)
      },
      onError: (error) => {
        console.error('Error updating episode:', error)
      },
    },
  )

  return {
    mutate,
    isLoading,
  }
}
