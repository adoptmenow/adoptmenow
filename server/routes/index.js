const express = require('express')
const router = express.Router()
const pet = require('./pet')
const home = require('./home')
const authRouter = require('./auth')
const { authenticate } = require('../middlewares/auth')
const { isAdmin } = require('../middlewares/admin')

router.use('/', home)
router.use(authRouter)
router.use(authenticate)
router.use('/pet', pet)
router.use(isAdmin)




module.exports = router; 