const express = require('express')
const router = express.Router()
const userController = require('../Controllers/UserController')
const auth = require('../middleware/auth')

router.get('/info',auth,userController.getUserInfo)
router.post('/register',userController.registerUser)
router.put('/changePassword',auth,userController.changePass)
router.put('/changeName',auth,userController.changeName)
router.post('/login',userController.login)

module.exports = router