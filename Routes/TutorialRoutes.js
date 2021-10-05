const express = require('express')
const router = express.Router()
const tutorialController = require('../Controllers/TutorialController')

router.get('/',tutorialController.getClassTutorials)
router.get('/all',tutorialController.getAllClassTutorials)
router.get('/:id',tutorialController.getClassTutorialsByID)
router.post('/',tutorialController.postNewTutorail)

module.exports = router