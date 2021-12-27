const express = require('express')
const router = express.Router()
const FileController = require('../Controllers/FilesController')
const auth = require('../middleware/auth')

router.get('/:name',FileController.getFile)

module.exports = router