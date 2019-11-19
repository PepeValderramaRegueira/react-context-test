import React from 'react'

// Consumers
import {RestaurantsConsumer} from './../providers/Restaurants.provider'

const Restaurants = (props) => 
  <RestaurantsConsumer>
    {
      ({restaurants}) =>
        <ul>
          {
            restaurants === null
              ? <p>Loading restaurants...</p>
              : restaurants.map((restaurant, idx) => <li key={idx}>{restaurant}</li>)
          }
        </ul>
    }
  </RestaurantsConsumer>

export default Restaurants
