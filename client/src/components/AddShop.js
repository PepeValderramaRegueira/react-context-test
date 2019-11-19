import React, { useState, useContext } from 'react'
import { ShopsContext } from '../providers/Shops.provider';

const AddShop = () => {
  const [newShopInput, setNewShopInput] = useState('')
  const { addShop } = useContext(ShopsContext)

  const handleInputChange = e => setNewShopInput(e.target.value)

  const handleFormSubmit = e => { e.preventDefault(); addShop(newShopInput); setNewShopInput('') }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <input type="text" id="new-shop" value={newShopInput} onChange={handleInputChange} placeholder="Shop name"/>
        <label htmlFor="new-shop">Shop name</label>
      </div>
      <div>
        <input type="submit" value="Add new shop" />
      </div>
    </form>
  )
}

export default AddShop
