const express = require('express')
const router = express.Router()
const ClassController = require('../Controllers/ClassController')
const auth = require('../middleware/auth')

router.get('/byPart',ClassController.getAllClassesByPart)

router.get('/byName',ClassController.getClassesByName)

router.get('/skills',ClassController.getClassSkill)

router.post('/skill',auth,ClassController.postNewSkill)

router.get('/skill',ClassController.getSkill)

router.post('/',ClassController.addNewClass)    



module.exports = router