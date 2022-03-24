const XIVAPI = require('@xivapi/js')

xiv = new XIVAPI()

const getServers = (req,res) => {
    xiv.data.servers().then((result) => {
        res.status(202).send(result)
    }).catch(err=>{res.status(404).send(err)})
}

const getDataCenters = (req,res) => {
    xiv.data.datacenters().then((result) => {
        res.status(202).send(result)
    }).catch(err=>{res.status(404).send(err)})
}


const listByName = (req,res) => {
    xiv.data.list(req.params.name,{page:req.params.id}).then((result) => {
        res.status(202).send(result)
    }).catch(err=>{res.status(404).send(err)})
}

const getContent = (req,res) => {
    xiv.data.content().then((result) => {
        res.status(202).send(result)
    }).catch(err=>{res.status(404).send(err)})
}


module.exports = {
    getServers,getDataCenters,listByName,getContent
}