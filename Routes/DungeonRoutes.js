const express = require('express')
const router = express.Router()
const dungeonController = require('../Controllers/DungeonController')
const auth = require('../middleware/auth')

router.get('/page/:id',dungeonController.getDungeons)
router.get('/',dungeonController.getAllDungeons)
router.post('/',auth,dungeonController.postDungeons)

router.get('/types',dungeonController.getDunegonsType)


module.exports = router