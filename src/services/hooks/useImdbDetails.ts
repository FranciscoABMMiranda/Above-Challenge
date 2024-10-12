import { useQuery } from 'react-query'
import { getImdbDetails, GetImdbDetailsParams } from '../api'
import { IMDB_DETAILS } from '../utils'

interface UseImdbDetailsParams extends Partial<GetImdbDetailsParams> {
  enabled?: boolean
}

export const useImdbDetails = ({
  id,
  enabled = true,
}: UseImdbDetailsParams) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [IMDB_DETAILS, id],
    // request will never be done if id is undefined (enabled prop will be false)
    // the cast is here just to surpress the ts error
    queryFn: () => getImdbDetails({ id: id as string }),
    enabled,
  })

  return { data, isLoading, isError }
}
