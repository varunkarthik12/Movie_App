import React from 'react'

import { RouterProvider } from 'react-router-dom'
import { routes } from "./routes"
import { MovieProvider } from './Context/movie-context'

const App = () => {
  return (
    <MovieProvider>
        <RouterProvider  router={routes}/>
    </MovieProvider>
        )
}

export default App