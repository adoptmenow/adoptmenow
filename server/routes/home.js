const router = require('express').Router()
const PetController = require("../controllers/pet") 
const UserController = require("../controllers/user")

router.post("/googleLogin", UserController.googleLogin)
router.get("/", PetController.findAvailablePet) 

module.exports = router
