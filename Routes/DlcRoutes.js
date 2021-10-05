const express = require('express')
const router = express.Router()
const DlcController = require('../Controllers/DlcController')

router.get('/page/:id',DlcController.getAll)
router.post('/',DlcController.postDLC)

module.exports = router