const History = require('../Models/History')

const getHistoryAll = (req,res) => {
    History.find().exec(function(err,historyInfo){
        if (err) return console.error(err);
        res.send(historyInfo)
    })
}

const postHistory = (req,res) => {
    const historyToSaved = new History(req.body)
    historyToSaved.save(function (err) {
        if (err) {return console.error(err);}
        res.send(historyToSaved)
    });
}
const getPatch = (req,res) => {
    // req.params.name
    History.find({Title:req.params.name}).exec(function(err,historyInfo){
        if (err) return console.error(err);
        res.send(historyInfo)
    })
}

module.exports = {
    getHistoryAll,postHistory,getPatch
}