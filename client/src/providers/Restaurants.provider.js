import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const RestaurantsContext = createContext()

export const RestaurantsProvider = (props) => {
  const [restaurants, setRestaurants] = useState(null)

  useEffect(() => {
    (async () => {
      // Load restaurants data with a self calling arrow function
      const restaurantsData = await axios.get('http://localhost:3001/api/restaurants')
      setRestaurants(restaurantsData.data.restaurants)
    })()
  }, [])

  const addRestaurant = newRestaurant => setRestaurants([...restaurants, newRestaurant])

  return (
    <RestaurantsContext.Provider value={{restaurants, addRestaurant}}>
      {props.children}
    </RestaurantsContext.Provider>
  )
}

export const RestaurantsConsumer = RestaurantsContext.Consumer
