const express = require('express')
const router = express.Router()
const dungeonController = require('../Controllers/DungeonController')
const auth = require('../middleware/auth')

router.get('/page/:id',dungeonController.getDungeons)
router.post('/',auth,dungeonController.postDungeons)

router.get('/types',dungeonController.getDunegonsType)
router.post('/types',dungeonController.postDunegonsType)


module.exports = router