import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from './pages'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'landing',
        element: <Landing />,
      },
      {
        index: true,
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
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
