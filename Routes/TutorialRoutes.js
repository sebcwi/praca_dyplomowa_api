const express = require('express')
const router = express.Router()
const tutorialController = require('../Controllers/TutorialController')

router.get('/all',tutorialController.getClassTutorials)
router.get('/:id',tutorialController.getClassTutorialsByID)

module.exports = router