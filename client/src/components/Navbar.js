import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () =>
  <nav>
    <ul>
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/restaurants"}>Restaurants</NavLink></li>
      <li><NavLink to={"/shops"}>Shops</NavLink></li>
    </ul>
  </nav>

export default Navbar
