const express = require('express')
const router = express.Router()
const dunegonController = require('../Controllers/DungeonController')
const auth = require('../middleware/auth')

router.get('/page/:id',dunegonController.getDungeons)
router.post('/',auth,dunegonController.postDungeons)

module.exports = router