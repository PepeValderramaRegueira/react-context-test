import React from 'react'
import { ShopsConsumer } from './../providers/Shops.provider'

const Shops = () =>
  <ShopsConsumer>
    {
      ({shops}) =>
        <ul>
          {
            shops === null
              ? <p>Loading shops...</p>
              : shops.map((shop, idx) => <li key={idx}>{shop}</li>)
          }
        </ul>
    }
  </ShopsConsumer>

export default Shops
