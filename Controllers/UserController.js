const User = require('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const env = require('../env.json')

const getUserInfo = (req,res) => {
    let email = req.user.email;
    User.find({email:email},function (err, useinfo) {
        if(err) return res.status(404).send(err)
        res.status(202).send(useinfo)
      })
}

const registerUser = async (req,res) => {
    try {
        // Get user input
        const { username, email, password,lodestoneID } = req.body;
    
        // Validate user input
        if (!(email && password && username)) {
          res.status(400).send("All input is required");
        }
    
        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });
    
        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
        }
    
        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);
    
        // Create user in our database
        const user = await User({
            username:username,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
            lodestoneID: lodestoneID
        });
    
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email: email,username: username },
          env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
        // save user token
        user.token = token;
        
        user.save();
    
        // return new user
        res.status(201).send(user);
      } catch (err) {
        console.log(err);
      }
   
}
const changePass = (req,res) => {
    try
    {
        const user = User.findOneAndUpdate({_id:req.user.user_id},{password:req.body.password},function(err){
            if (err) {return console.error(err);}  
        })
        res.status(200).send(user);
    }
    catch(err)
    {
        res.status(404).send(err);
    }
    
}

const changeName = (req,res) => {
    try
    {
            const userUpdated = User.findOneAndUpdate({_id:req.user.user_id},{username:req.body.username},function(err){
                if (err) {return console.error(err);}
            })
            res.status(200).send(userUpdated)
    }
    catch(err)
    {
        res.status(404).send(err);
    }
}

const login = async (req,res) => {
    try {
        // Get user input
        const { email, password } = req.body;
    
        // Validate user input
        if (!(email && password)) {
          res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });
    
        if (user && (await bcrypt.compare(password, user.password))) {
          // Create token
          const token = jwt.sign(
            { user_id: user._id, email: email,username: user.username },
            env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
    
          // save user token
          user.token = token;    
          // user
          console.log(req.user)
          res.status(200).send(user);
        }
        else
        {
          res.status(404).send("Invalid Credentials");
        }
      } catch (err) {
        console.log(err);
      }
}

module.exports = {
    getUserInfo,registerUser,changePass,changeName,login
}