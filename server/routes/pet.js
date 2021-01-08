const router = require('express').Router()
const PetController = require("../controllers/pet") 
const { authenticate} = require('../middlewares/auth')
const { isAdmin} = require('../middlewares/admin')

router.get("/", PetController.findAvailablePet) 
router.get("/find/:filter", PetController.findByType) 
router.post("/register", PetController.insert) 
router.patch("/updatePetStatus/:id", authenticate, PetController.patch)
router.use(isAdmin)
router.get("/pending",  isAdmin, PetController.pending) 
router.get("/updatePet/:id", isAdmin, PetController.findOne) 
router.put("/updatePet/:id", isAdmin, PetController.update) 
router.delete("/delete/:id", isAdmin, PetController.delete) 

module.exports = router