const { ObjectId } = require('mongodb')
const User = require('../Models/User')

const getUsers = (req,res) =>{
    User.find().exec(function (err, useinfo) {
        if(err) return res.status(404).send(err)
        res.status(202).send(useinfo)
      })
}

const deleteUser = (req,res) => {
    
    // console.log(req.body)
    // res.status(202).send(req.body)

    User.deleteOne({email: req.body.email}).exec((err, userinfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(userinfo)
    })
}

module.exports = {
    getUsers,deleteUser
}