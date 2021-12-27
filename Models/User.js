const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id:{
        type:String,
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    token:{
        type:String
    },
    lodestoneID:{
        type:Number,
        required:true
    }

})
const User = mongoose.model('User',UserSchema)
module.exports = User