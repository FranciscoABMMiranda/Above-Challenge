import { ImdbDetails } from '../models'
import { imdbApiUrl } from '../utils'

export interface GetImdbDetailsParams {
  id: string
}

export const getImdbDetails = async ({
  id,
}: GetImdbDetailsParams): Promise<ImdbDetails> => {
  const queryParams = new URLSearchParams({
    i: id,
    apikey: import.meta.env.VITE_IMDB_API_KEY,
  })
  const response = await fetch(`${imdbApiUrl}?${queryParams}`)

  if (response.ok) return response.json()

  throw new Error('Error retrieving IMDB details')
}
