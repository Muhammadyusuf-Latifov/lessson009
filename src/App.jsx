import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import NotFound from './pages/notFound/NotFound'

const App = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound/>
      
    }
  ]);
}

export default App