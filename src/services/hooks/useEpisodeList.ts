import { useQuery } from 'react-query'
import { getEpisodeList, GetEpisodeListParams } from '../api'
import { EPISODE_LIST } from '../utils'

export const useEpisodeList = ({ search }: GetEpisodeListParams) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [EPISODE_LIST, search],
    queryFn: () => getEpisodeList({ search }),
  })

  return { data, isLoading, isError }
}
