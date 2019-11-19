import React, { useContext } from 'react'
import { RestaurantsContext } from './../providers/Restaurants.provider'

// Components
import RestaurantsList from '../components/RestaurantsList'

const Restaurants = () => {
  const { addRestaurant } = useContext(RestaurantsContext)
  return (
    <section>
      <h2>Restaurants</h2>
      <p>A list with all the available restaurants.</p>
      <RestaurantsList />
      <button onClick={() => addRestaurant('New restaurant')}>Add restaurant</button>
    </section>
  )
}

export default Restaurants
