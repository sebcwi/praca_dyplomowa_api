const mongoose = require('mongoose')

const dungeonSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    Level:{
        type:Number
    },
    Description:{
        type:String,
    },
    Banner:{
        type:String,
    },
    Icon:{
        type:String,
    },
    DPS:{
        type:Number
    },
    Healers:{
        type:Number
    },
    Tanks:{
        type:Number
    }
})

const Dungeon = mongoose.model('dungeons',dungeonSchema)
module.exports = Dungeon