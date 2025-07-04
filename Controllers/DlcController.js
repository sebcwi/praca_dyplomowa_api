const DLC = require('../Models/DLC')

const getAll = (req,res) => {

    const id = req.params.id
    const nPerPage = 2
    const skip = id>1?((id-1)*nPerPage):0

    DLC.find().skip(skip).limit(nPerPage).exec(function (err, dlcInfo) {
        if(err) return res.status(404).send(err)
        res.status(202).send(dlcInfo)
      })
}

const postDLC = (req,res) => {
    res.status(202).send(req.body)
}

module.exports = {
    getAll,postDLC
}