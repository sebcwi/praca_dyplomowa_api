const XIVAPI = require('@xivapi/js')
xiv = new XIVAPI()


const getByID = (req,res) => {
    xiv.character.get(req.params.id).then((result) => {
        res.send(result)
    }).catch(err=>{res.send({msg:err})})
}

module.exports = {
    getByID
}