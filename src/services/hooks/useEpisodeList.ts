import { useQuery } from 'react-query'
import { getEpisodeList } from '../api'
import { EPISODE_LIST } from '../utils'

export const useEpisodeList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [EPISODE_LIST],
    queryFn: getEpisodeList,
  })

  return { data, isLoading, isError }
}
