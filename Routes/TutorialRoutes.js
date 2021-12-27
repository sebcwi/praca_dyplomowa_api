const express = require('express')
const router = express.Router()
const tutorialController = require('../Controllers/TutorialController')
const auth = require('../middleware/auth')

router.get('/',tutorialController.getClassTutorials)
router.get('/all',tutorialController.getAllClassTutorials)
router.get('/:id',tutorialController.getClassTutorialsByID)
router.post('/',auth,tutorialController.postNewTutorail)

module.exports = router