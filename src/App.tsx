import { ApolloProvider } from '@apollo/client'
import { queryClient } from '@services'
import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { apolloClient } from './services/api/websocketApollo'
// import { useSubscribeCreate } from './services/api/websocket'

function App() {
  // useWebsocket()
  // const { createData, deleteData, updateData } = useSubscribeCreate()

  //console.log({ createData, deleteData, updateData })
  return (
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ApolloProvider>
  )
}

export default App
