import { SearchPage } from '@pages'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchPage />
    </QueryClientProvider>
  )
}

export default App
