const express = require('express')
const router = express.Router()
const DlcController = require('../Controllers/DlcController')
const auth = require('../middleware/auth')

router.get('/page/:id',DlcController.getAll)
router.post('/',auth,DlcController.postDLC)

module.exports = router