import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [restaurants, setRestaurants] = useState(null)
  const [shops, setShops] = useState(null)

  useEffect(() => {
    const getRestaurantsData = async () => {
      const restaurantsData = await axios.get('http://localhost:3001/api/restaurants')
      console.log("RESTAURANTS CHANGING")
      setRestaurants(restaurantsData.data.restaurants)
    }

    const getShopsData = async () => {
      const shopsData = await axios.get('http://localhost:3001/api/shops')
      console.log("SHOPS CHANGING")
      setShops(shopsData.data.shops)
    }

    getRestaurantsData()
    getShopsData()
  }, [])

  const addNewRestaurant = newRestaurant => setRestaurants([...restaurants, newRestaurant])
  const addNewShop = newShop => setShops([...shops, newShop])
  
  return (
    <AppContext.Provider value={{restaurants, shops, addNewRestaurant, addNewShop}}>
      {props.children}
    </AppContext.Provider>
  )
}

export const AppConsumer = AppContext.Consumer
