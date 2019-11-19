const restaurants = require("./../api/restaurants.json")
const shops = require("./../api/shops.json")

module.exports.getRestaurants = async (req, res) => setTimeout(() => res.status(200).json(restaurants), 1000)
module.exports.getShops = async (req, res) => setTimeout(() => res.status(200).json(shops),500)
