import { useQuery } from 'react-query'
import { getEpisodeDetails, GetEpisodeDetailsParams } from '../api'
import { EPISODE_DETAILS } from '../utils'

export const useEpisodeDetails = ({ episodeId }: GetEpisodeDetailsParams) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [EPISODE_DETAILS, episodeId],
    queryFn: () => getEpisodeDetails({ episodeId }),
  })

  return { data, isLoading, isError }
}
