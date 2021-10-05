
const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    name:{
        type:String
    },
    startDate:{
        type:String,
    },
    endDate:{
        type:String,
    },
    color:{
        type:String
    }
})

const Event = mongoose.model('events',eventSchema)
module.exports = Event