const router = require("express").Router()
const controller = require("./../controllers")

router.get("/api/restaurants", controller.getRestaurants)
router.get("/api/shops", controller.getShops)

module.exports = router
