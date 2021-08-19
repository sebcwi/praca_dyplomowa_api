const express = require('express')
const router = express.Router()
const userController = require('../Controllers/UserController')

router.get('/info',userController.getUserInfo)
router.post('/register',userController.registerUser)

module.exports = router