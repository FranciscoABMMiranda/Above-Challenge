import { gql } from 'graphql-request'
import { EpisodeDetails } from '../models'
import { graphqlClient } from '../utils'

const UPDATE_EPISODE_MUTATION = gql`
  mutation UpdateEpisode($episode: UpdateEpisodeInput!) {
    updateEpisode(episode: $episode) {
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

interface UpdateEpisodeParams {
  episode: EpisodeDetails
}

export const updateEpisode = async ({ episode }: UpdateEpisodeParams) => {
  const variables = { episode }
  const response = await graphqlClient.request<{
    updateEpisode: EpisodeDetails
  }>(UPDATE_EPISODE_MUTATION, variables)

  return response.updateEpisode
}
