const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({
    Patch:{
        type: String
    },
    Title:{
        type: String
    },
    Text: {
        type:String
    },
    Source:{
        type:String
    },
    Extansion:{
        type:String
    }
})

const History = mongoose.model('history',historySchema)
module.exports = History