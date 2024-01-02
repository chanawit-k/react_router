import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from './pages'

import { loader as landingLoader } from './pages/Landing.jsx'
import { loader as singleCocktailLoader } from './pages/Cocktail.jsx'
import { action as newsletterAction } from './pages/Newsletter.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: 'cocktail/:id',
        loader: singleCocktailLoader,
        element: <Cocktail />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'newsletter',
        action: newsletterAction,
        element: <Newsletter />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App
