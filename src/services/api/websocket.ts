import { Client, createClient } from 'graphql-ws'
import { useEffect, useState } from 'react'

export const ON_CREATE_EPISODE = `
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

export const ON_DELETE_EPISODE = `
  subscription OnDeleteEpisode {
    onDeleteEpisode
  }
`

export const ON_UPDATE_EPISODE = `
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

const wsClient: Client = createClient({
  url: import.meta.env.VITE_WEBSOCKET_URL,
  connectionParams: {
    headers: {
      'x-api-key': import.meta.env.VITE_API_KEY,
    },
  },
})

interface SubscriptionData<T> {
  data?: T
  error?: string
  loading: boolean
}

export const useWebsocket = <TData>(
  query: string,
  variables: Record<string, any> = {},
): SubscriptionData<TData> => {
  const [data, setData] = useState<TData | undefined>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    const unsubscribe = wsClient.subscribe(
      {
        query,
        variables,
      },
      {
        next: (result) => {
          setData(result.data)
          setLoading(false)
        },
        error: (err) => {
          setError(`Subscription error: ${err.message}`)
          setLoading(false)
        },
        complete: () => {
          setLoading(false)
        },
      },
    )

    return () => unsubscribe()
  }, [query, variables])

  return { data, loading, error }
}

export const useSubscribeCreate = () => {
  const { data: createData } = useWebsocket(ON_CREATE_EPISODE)
  const { data: deleteData } = useWebsocket(ON_DELETE_EPISODE)
  const { data: updateData } = useWebsocket(ON_UPDATE_EPISODE)
  return { createData, deleteData, updateData }
}
