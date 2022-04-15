const ObjectId = require('mongodb').ObjectId; 
const User = require('../Models/User')
const Dungeon = require('../Models/Dungeons')
const History = require('../Models/History')
const Classes = require('../Models/Class')
const { ObjectID } = require('mongodb');
const Skills = require('../Models/Skills');
const Event = require('../Models/Event')
const Tutorial = require('../Models/Tutorial')

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

const promoteUserToAdmin = (req,res) => {
    User.updateOne({email:req.body.email},{role:'Admin'}).exec((err,userInfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(userInfo)
    })
}

const deleteDungeons = (req,res) => {

    Dungeon.deleteOne({Name:req.body.name}).exec((err,dungInfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(dungInfo)
    })
}
const deleteHistories = (req,res) => {
    History.deleteOne({Patch:req.body.patch}).exec((err,historiesInfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(historiesInfo)
    })
}

const deleteClass = (req,res) => {
    Classes.deleteOne({idClass:req.body.idClass}).exec((err,classInfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(classInfo)
    })
}

const updateDungeons = (req,res) => {

    Dungeon.updateOne({_id:ObjectId(req.body._id)},req.body).exec((err,dungInfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(dungInfo)
    })
}

const updateHistories = (req,res) => {
    History.updateOne({_id:ObjectId(req.body._id)},req.body).exec((err,historyInfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(historyInfo)
    })
}

const updateClass = (req,res) => {
    Classes.updateOne({idClass:req.body.idClass},req.body).exec((err,classInfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(classInfo)
    })
}

const deleteSkill = (req,res) => {

    Skills.deleteOne({idSkill:req.body.idSkill}).exec((err,skillInfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(skillInfo)
    })
}
const updateSkill = (req,res) => {
    Skills.updateOne({idSkill:req.body.idSkill},req.body).exec((err,skillInfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(skillInfo)
    })
}

const deleteEvents = (req,res) => {
    Event.deleteOne({_id:ObjectId(req.body._id)}).exec((err,eventInfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(eventInfo)
    })
}

const updateEvent = (req,res) => {
    Event.updateOne({_id:ObjectId(req.body._id)},req.body).exec((err,eventInfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(eventInfo)
    })
}
const updateTutorial = (req,res) => {
    Tutorial.updateOne({_id:ObjectId(req.body._id)},req.body).exec((err,tutorialInfo)=>{
        if(err) return res.status(404).send(err)
        res.status(202).send(tutorialInfo)
    })
}

module.exports = {
    getUsers,deleteUser,deleteDungeons,deleteHistories,promoteUserToAdmin,deleteClass,updateDungeons,updateHistories,updateClass,deleteSkill,updateSkill,deleteEvents,updateEvent,updateTutorial
}