import { gql } from 'graphql-request'
import { EpisodeDetails } from '../models'
import { graphqlClient } from '../utils'

const CREATE_EPISODE_MUTATION = gql`
  mutation CreateEpisode($episode: EpisodeInput!) {
    createEpisode(episode: $episode) {
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

interface CreateEpisodeParams {
  episode: EpisodeDetails
}

export const createEpisode = async ({ episode }: CreateEpisodeParams) => {
  const variables = { episode }
  const response = await graphqlClient.request<{
    createEpisode: EpisodeDetails
  }>(CREATE_EPISODE_MUTATION, variables)
  return response.createEpisode
}
