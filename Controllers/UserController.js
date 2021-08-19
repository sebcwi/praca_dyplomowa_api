const User = require('../Models/User')
  
const getUserInfo = (req,res) => {
    let name = req.query.username;
    User.find({username:name},function (err, useinfo) {
        if (err) return console.error(err);
        res.send(useinfo)
      })
}

const registerUser = (req,res) => {

    const userToSaved = new User(req.body)
    userToSaved.save(function (err) {
        if (err) {return console.error(err);}
        res.send(userToSaved)
      });
}


module.exports = {
    getUserInfo,registerUser
}