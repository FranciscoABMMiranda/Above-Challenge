import { ModalProvider } from '@components'
import { DetailsPage, SearchPage } from '@pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <ModalProvider>
          <SearchPage />
        </ModalProvider>
      ),
    },
    {
      path: '/:id',
      element: (
        <ModalProvider>
          <DetailsPage />
        </ModalProvider>
      ),
    },
  ],
  { basename: '/Above-Challenge' },
)
