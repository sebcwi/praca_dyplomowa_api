const express = require('express')
const router = express.Router()
const characterController = require('../Controllers/CharacterController')
const auth = require('../middleware/auth')

router.get('/:id',characterController.getByID)

module.exports = router