const History = require('../Models/History')

const getHistoryAll = (req,res) => {
    switch(req.query.extansion){
        case 'all':{
            History.find().sort({Patch:1}).exec(function(err,historyInfo){
                if(err) return res.status(404).send(err)
                res.status(202).send(historyInfo)
            })
            break;
        }
        default:{
            History.find({Extansion:req.query.extansion}).sort({Patch:1}).exec(function(err,historyInfo){
                if(err) return res.status(404).send(err)
                res.status(202).send(historyInfo)
            })
        }
    }
    
}

const postHistory = (req,res) => {
    const historyToSaved = new History(req.body)
    historyToSaved.save(function (err) {
        if(err) return res.status(404).send(err)
        res.status(202).send(historyToSaved)
    });
}

const getPatch = (req,res) => {
    // req.params.name
    History.find({Title:req.params.name}).exec(function(err,historyInfo){
        if(err) return res.status(404).send(err)
        res.status(202).send(historyInfo)
    })
}

module.exports = {
    getHistoryAll,postHistory,getPatch
}