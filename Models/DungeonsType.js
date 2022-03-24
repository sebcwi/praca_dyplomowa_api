const mongoose = require('mongoose')

const dungeonTypeSchema = new mongoose.Schema({
    typeDungeon:{
        type:String
    },
    DPS:{
        type:Number
    },
    Healers:{
        type:Number
    },
    Tanks:{
        type:Number
    },
    Groups:{
        type:Number
    }
})

const Dungeon = mongoose.model('DungeonsType',dungeonTypeSchema)
module.exports = Dungeon