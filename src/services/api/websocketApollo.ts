import {
  ApolloClient,
  gql,
  HttpLink,
  InMemoryCache,
  split,
  useSubscription,
} from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'

const ON_CREATE_EPISODE = gql`
  subscription OnCreateEpisode {
    onCreateEpisode {
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

const ON_DELETE_EPISODE = gql`
  subscription OnDeleteEpisode {
    onDeleteEpisode
  }
`

const ON_UPDATE_EPISODE = gql`
  subscription OnUpdateEpisode {
    onUpdateEpisode {
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

const wsLink = new GraphQLWsLink(
  createClient({
    url: import.meta.env.VITE_WEBSOCKET_URL,
    connectionParams: {
      headers: {
        'x-api-key': import.meta.env.VITE_API_KEY,
      },
    },
  }),
)
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_API_URL,
  headers: {
    'x-api-key': import.meta.env.VITE_API_KEY,
  },
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink,
)

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})

export const useApollo = () => {
  const { data: createData, error: createError } =
    useSubscription(ON_CREATE_EPISODE)

  const { data: deleteData, error: deleteError } =
    useSubscription(ON_DELETE_EPISODE)

  const { data: updateData, error: updateError } =
    useSubscription(ON_UPDATE_EPISODE)

  console.log({ createError, deleteError, updateError })
  return { createData, deleteData, updateData }
}
