const router = require('express').Router()
const PetController = require("../controllers/pet")

router.get("/", PetController.findAvailablePet) 
router.get("/find/:filter", PetController.findByType) 
router.post("/register", PetController.insert) 
router.patch("/updatePetStatus/:id", PetController.patch)
router.get("/pending", PetController.pending) 
router.put("/updatePet/:id", PetController.update) 
router.delete("/delete/:id", PetController.delete) 

module.exports = router