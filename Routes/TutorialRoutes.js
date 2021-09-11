const express = require('express')
const router = express.Router()
const tutorialController = require('../Controllers/TutorialController')

router.get('/',tutorialController.getClassTutorials)
router.get('/:id',tutorialController.getClassTutorialsByID)

module.exports = router