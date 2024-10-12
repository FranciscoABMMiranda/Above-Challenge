import { DetailsPage, SearchPage } from '@pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchPage />,
  },
  {
    path: '/:id',
    element: <DetailsPage />,
  },
])
