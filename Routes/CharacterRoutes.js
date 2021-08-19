const express = require('express')
const router = express.Router()
const characterController = require('../Controllers/CharacterController')

router.get('/:id',characterController.getByID)

module.exports = router