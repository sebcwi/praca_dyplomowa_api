const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    idClass:{
        type:Number,
    },
    Name:{
        type:String,
    },
    Part:{
        type:String,
    },
    Disciplies:{
        type:String,
    },
    url:{
        type:String,
    },
    type:{
        type:String
    }
})

const Class = mongoose.model('classes',classSchema)
module.exports = Class