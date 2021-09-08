const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const tutorialSchema = new mongoose.Schema({
    ID:{
        type:Number
    },
    Data:{
        type:Number
    },
    Text:{
        type:String
    },
    Title:{
        type:String
    },
    Class:{
        type:String
    }
})

const Tutorials = mongoose.model('tutorials',tutorialSchema)
module.exports = Tutorials