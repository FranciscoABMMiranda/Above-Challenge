import { useMutation } from 'react-query'
import { deleteEpisode } from '../api'
import { EPISODE_LIST, queryClient } from '../utils'

interface UseDeleteEpisodeParams {
  onSuccess?: () => void
}

export const useDeleteEpisode = ({
  onSuccess,
}: UseDeleteEpisodeParams = {}) => {
  const { mutate, isLoading } = useMutation(
    (episodeId: string) => deleteEpisode({ episodeId }),
    {
      onSuccess: () => {
        onSuccess?.()
        queryClient.invalidateQueries(EPISODE_LIST)
      },
      onError: (error) => {
        console.error('Error deleting episode:', error)
      },
    },
  )

  return {
    mutate,
    isLoading,
  }
}
