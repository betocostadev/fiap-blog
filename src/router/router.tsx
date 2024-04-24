import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from '@/layouts/DefaultLayout'
import ErrorPage from '@/pages/ErrorPage'
import Home from '@/pages/Home'
import Post from '@/pages/Post'
import pathConstants from './paths'
import Posts from '@/pages/Posts'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: pathConstants.HOME,
        element: <Home />,
      },
      {
        path: pathConstants.POSTS,
        element: <Posts />,
      },
      {
        path: pathConstants.POST_SLUG,
        element: <Post />,
      },
    ],
  },
])

export default router
