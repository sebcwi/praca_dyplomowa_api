const express = require('express')
const router = express.Router()
const userController = require('../Controllers/UserController')

router.get('/info',userController.getUserInfo)
router.post('/register',userController.registerUser)
router.put('/changePassword',userController.changePass)
router.put('/changeName',userController.changeName)
router.post('/login',userController.login)

module.exports = router