const DLC = require('../Models/DLC')

const getAll = (req,res) => {
    DLC.find().exec(function (err, dlcInfo) {
        if (err) return console.error(err);
        res.send(dlcInfo)
      })
}

module.exports = {
    getAll
}