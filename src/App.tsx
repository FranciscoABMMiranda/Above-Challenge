import { queryClient } from '@services'
import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
