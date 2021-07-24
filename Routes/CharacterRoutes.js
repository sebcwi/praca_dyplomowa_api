const express = require('express')
const XIVAPI = require('@xivapi/js')

const router = express.Router()
xiv = new XIVAPI()

router.get('/:id',(req,res)=>{
    xiv.character.get(req.params.id).then((result) => {
        
        res.send(result)
    }).catch(err=>{res.send({msg:err})})
})

module.exports = router