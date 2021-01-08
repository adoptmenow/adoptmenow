const router = require('express').Router()
const PetController = require("../controllers/pet") 

router.get("/", PetController.findAvailablePet) 

module.exports = router
