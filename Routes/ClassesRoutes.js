const express = require('express')
const router = express.Router()
const ClassController = require('../Controllers/ClassController')

router.get('/byPart',ClassController.getAllClassesByPart)

router.get('/byName',ClassController.getClassesByName)

router.get('/skills',ClassController.getClassSkill)

router.post('/skill',ClassController.postNewSkill)

module.exports = router