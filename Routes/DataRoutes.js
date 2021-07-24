const express = require('express')
const XIVAPI = require('@xivapi/js')

const router = express.Router()
xiv = new XIVAPI()

router.get('/content',(req,res)=>{
    xiv.data.content().then((result) => {
        res.send(result)
    }).catch(err=>{res.send(err)})
})

router.get('/:name/:id',(req,res)=>{
    xiv.data.get(req.params.name,req.params.id).then((result) => {
        res.send(result)
    }).catch(err=>{res.send(err)})
})

router.get('/servers',(req,res)=>{
    xiv.data.servers().then((result) => {
        res.send(result)
    }).catch(err=>{res.send(err)})
})

router.get('/datacenters',(req,res)=>{
    xiv.data.datacenters().then((result) => {
        res.send(result)
    }).catch(err=>{res.send(err)})
})

module.exports = router