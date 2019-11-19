import React from 'react'

// Views
import Home from './../views/Home'
import Shops from '../views/Shops'
import Restaurants from '../views/Restaurants'

const routes = [
  {
    exact: true,
    path: "/",
    render: () => (<Home />)
  },
  {
    exact: true,
    path: "/shops",
    render: () => (<Shops />)
  },
  {
    exact: true,
    path: "/restaurants",
    render: () => (<Restaurants />)
  }
]

export default routes
