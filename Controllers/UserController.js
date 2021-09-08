const User = require('../Models/User')
var crypto = require('crypto');

const getUserInfo = (req,res) => {
    let name = req.query.username;
    User.find({username:name},function (err, useinfo) {
        if (err) return console.error(err);
        res.send(useinfo)
      })
}

const registerUser = (req,res) => {
    var sha256 = crypto.createHash('sha256');
    const passwordHased = sha256.update(req.body.password).digest('hex');
    const userToSaved = new User({
            username:req.body.username,
            password:passwordHased,
            email:req.body.email,
            lodestoneID:req.body.lodestoneID
        })
    userToSaved.save(function (err) {
        if (err) {return console.error(err);}
        res.send(userToSaved)
      });
   
}
const changePass = (req,res) => {
    const user = User.findOneAndUpdate({_id:req.query.id},{password:req.body.password},function(err){
        if (err) {return console.error(err);}  
    })
    res.send({"Status":"200","Message":"Done"})
    
}

const changeName = (req,res) => {
    console.log(req.body)
    const userUpdated = User.findOneAndUpdate({_id:req.query.id},{username:req.body.username},function(err){
        if (err) {return console.error(err);}
    })
    res.send({"Status":"200","Message":"Done"})
}

const login = (req,res) => {
    var sha256 = crypto.createHash('sha256');
    sha256.update(req.body.password)
    const email = req.body.email
    const hashedPassword = sha256.digest('hex');
    User.findOne({email:email,password:hashedPassword},function(err, userLogin){
        if(err){return console.error(err)}
        res.send(userLogin)
    })
}

module.exports = {
    getUserInfo,registerUser,changePass,changeName,login
}