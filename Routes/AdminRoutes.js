const express = require('express')
const router = express.Router()
const AdminController = require('../Controllers/AdminController')
const auth = require('../middleware/auth')

router.get('/users',AdminController.getUsers)
router.delete('/user',auth,AdminController.deleteUser)
router.put('/promote',auth,AdminController.promoteUserToAdmin)

router.delete('/dungeon',auth,AdminController.deleteDungeons)
router.put('/dungeon',auth,AdminController.updateDungeons)

router.delete('/histories',auth,AdminController.deleteHistories)
router.put('/histories',auth,AdminController.updateHistories)

router.delete('/classes',auth,AdminController.deleteClass)
router.put('/classes',auth,AdminController.updateClass)

router.delete('/skill',auth,AdminController.deleteSkill)
router.put('/skill',auth,AdminController.updateSkill)

router.delete('/event',auth,AdminController.deleteEvents)
router.put('/event',auth,AdminController.updateEvent)

router.put('/tutorial',auth,AdminController.updateTutorial)

module.exports = router