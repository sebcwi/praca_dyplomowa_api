const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
    idSkill:{
        type:Number
    },
    Class:{
        type:String
    },
    Level:{
        type:Number
    },
    Name:{
        type:String
    },
    Description:{
        type:String
    },
    imgURL:{
        type:String
    }
})

const Skills = mongoose.model('skills',skillSchema)
module.exports = Skills