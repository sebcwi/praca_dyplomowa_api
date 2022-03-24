const XIVAPI = require('@xivapi/js')
xiv = new XIVAPI()


const getByID = (req,res) => {
    xiv.character.get(req.params.id).then((result) => {
        res.status(202).send(result)
    }).catch(err=>{res.status(404).send({msg:err})})
}

module.exports = {
    getByID
}