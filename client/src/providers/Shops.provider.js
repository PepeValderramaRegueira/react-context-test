import React, { useState, useEffect ,createContext } from 'react'
import axios from 'axios'

export const ShopsContext = createContext()

export const ShopsProvider = (props) => {
  const [shops, setShops] = useState(null)

  useEffect(() => {
    const getShopsData = async () => {
      const shopsData = await axios.get('http://localhost:3001/api/shops')
      setShops(shopsData.data.shops)
    }

    // Load shops with an async arrow function
    getShopsData()
  }, [])

  const addShop = newShop => setShops([...shops, newShop])
  
  return (
    <ShopsContext.Provider value={{shops, addShop}}>
      {props.children}
    </ShopsContext.Provider>
  )
}

export const ShopsConsumer = ShopsContext.Consumer
