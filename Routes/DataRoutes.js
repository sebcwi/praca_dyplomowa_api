const express = require('express')
const XIVAPI = require('@xivapi/js')
const dataController = require('../Controllers/DataController')
const auth = require('../middleware/auth')

const router = express.Router()
xiv = new XIVAPI()


router.get('/content',dataController.getContent)

// router.get('/:name/page/:id',dataController.listByName)

router.get('/servers',dataController.getServers)

router.get('/datacenters',dataController.getDataCenters)


module.exports = router