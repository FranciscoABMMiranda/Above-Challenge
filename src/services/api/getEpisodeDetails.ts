import { gql } from 'graphql-request'
import { EpisodeDetailsAPIRepsonse } from '../models'
import { graphqlClient } from '../utils'

const EPISODE_DETAILS_QUERY = gql`
  query GetEpisodeById($episodeId: String!) {
    getEpisodeById(episodeId: $episodeId) {
      id
      series
      title
      description
      seasonNumber
      episodeNumber
      releaseDate
      imdbId
    }
  }
`

export interface GetEpisodeDetailsParams {
  episodeId: string
}

export const getEpisodeDetails = async ({
  episodeId,
}: GetEpisodeDetailsParams) => {
  const variables = { episodeId }
  const data = await graphqlClient.request<EpisodeDetailsAPIRepsonse>(
    EPISODE_DETAILS_QUERY,
    variables,
  )

  return data.getEpisodeById
}
