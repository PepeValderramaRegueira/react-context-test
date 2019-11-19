import React from 'react'

// Components
import ShopsList from './../components/ShopsList'
import AddShop from '../components/AddShop'

const Shops = () =>
  <section>
    <h2>Shops</h2>
    <p>A list with all the available shops.</p>
    <ShopsList />
    <AddShop />
  </section>

export default Shops
