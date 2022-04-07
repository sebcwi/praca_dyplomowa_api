const express = require('express')
const router = express.Router()
const AdminController = require('../Controllers/AdminController')
const auth = require('../middleware/auth')

router.get('/users',AdminController.getUsers)
router.delete('/user',auth,AdminController.deleteUser)
router.delete('/dungeon',auth,AdminController.deleteDungeons)

module.exports = router