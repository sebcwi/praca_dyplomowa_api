const { ObjectId } = require('mongodb')
const User = require('../Models/User')
const Dungeon = require('../Models/Dungeons')

const getUsers = (req,res) =>{
    User.find().exec(function (err, useinfo) {
        if(err) return res.status(404).send(err)
        res.status(202).send(useinfo)
      })
}

const deleteUser = (req,res) => {

    User.deleteOne({email: req.body.email}).exec((err, userinfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(userinfo)
    })

}

const deleteDungeons = (req,res) => {

    Dungeon.deleteOne({Name:req.body.name}).exec((err,dungInfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(dungInfo)
    })
}

module.exports = {
    getUsers,deleteUser,deleteDungeons
}