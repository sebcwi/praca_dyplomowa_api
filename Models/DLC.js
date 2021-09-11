const mongoose = require('mongoose')

const dlcSchema = new mongoose.Schema({
    Notes: {
        type: String
    },
    Patch:{
        type: String
    },
    RealeaseDate:{
        type: String
    },
    Title:{
        type: String
    },
    Img: {
        type:String
    }  
})

const DLC = mongoose.model('dlcs',dlcSchema)
module.exports = DLC