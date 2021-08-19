const XIVAPI = require('@xivapi/js')
xiv = new XIVAPI()

const getServers = (req,res) => {
    xiv.data.servers().then((result) => {
        res.send(result)
    }).catch(err=>{res.send(err)})
}

const getDataCenters = (req,res) => {
    xiv.data.datacenters().then((result) => {
        res.send(result)
    }).catch(err=>{res.send(err)})
}


const listByName = (req,res) => {
    xiv.data.list(req.params.name,{page:req.params.id}).then((result) => {
        res.send(result)
    }).catch(err=>{res.send(err)})
}

const getContentByID = (req,res) => {
    xiv.data.list(req.params.name,{ids:req.params.id}).then((result) => {
        res.send(result)
    }).catch(err=>{res.send(err)})
}


const getContent = (req,res) => {
    xiv.data.content().then((result) => {
        res.send(result)
    }).catch(err=>{res.send(err)})
}




module.exports = {
    getServers,getDataCenters,listByName,getContentByID,getContent
}