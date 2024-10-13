import { gql } from 'graphql-request'
import { graphqlClient } from '../utils'

const DELETE_EPISODE_MUTATION = gql`
  mutation DeleteEpisode($episodeId: String!) {
    deleteEpisode(episodeId: $episodeId)
  }
`

interface DeleteEpisodeParams {
  episodeId: string
}

export const deleteEpisode = async ({ episodeId }: DeleteEpisodeParams) => {
  const variables = { episodeId }
  const response = await graphqlClient.request<{ deleteEpisode: string }>(
    DELETE_EPISODE_MUTATION,
    variables,
  )

  return response.deleteEpisode
}
