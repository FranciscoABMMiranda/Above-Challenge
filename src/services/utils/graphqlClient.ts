import { GraphQLClient } from 'graphql-request'
import { requestHeaders } from './requestHeaders'

export const graphqlClient = new GraphQLClient(
  import.meta.env.VITE_GRAPHQL_API_URL,
  { headers: requestHeaders },
)
