const express = require('express')
const router = express.Router()
const pet = require('./pet')
const home = require('./home')

router.use('/', home)
router.use('/pet', pet)

module.exports = router; 