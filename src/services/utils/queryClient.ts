import { QueryClient } from 'react-query'

const FIVE_MINUTES = 1000 * 60 * 5

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: FIVE_MINUTES,
    },
  },
})
