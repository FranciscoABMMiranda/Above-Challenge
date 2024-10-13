import { gql } from 'graphql-request'
import { EpisodeList } from '../models'
import { graphqlClient } from '../utils'

const LIST_EPISODES_QUERY = gql`
  query ListEpisodes($search: String) {
    listEpisodes(search: $search) {
      id
      series
      title
      description
      seasonNumber
      episodeNumber
    }
  }
`

export interface GetEpisodeListParams {
  search: string
}

export const getEpisodeList = async ({ search }: GetEpisodeListParams) => {
  const variables = { search }
  const data = await graphqlClient.request<EpisodeList>(
    LIST_EPISODES_QUERY,
    variables,
  )

  return data.listEpisodes
}
