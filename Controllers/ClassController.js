const Classes = require('../Models/Class')
const Dungeon = require('../Models/Dungeons')
const Skills = require('../Models/Skills')

const getAllClassesByPart = (req,res) => {
    const filter = req.query.part
    Classes.find({Part:filter}).exec(function (err, classInfo) {
        if (err) return console.error(err);
        res.send(classInfo)
      })
}

const getClassesByName = (req,res) => {
    const filter = req.query.name
    Classes.find({Name:filter}).exec(function (err, classInfo) {
        if (err) return console.error(err);
        res.send(classInfo)
      })
}

const getClassSkill = (req,res) => {
    const JobName = req.query.name
    Skills.find({Class:JobName}).sort({Level:1}).exec(function(err,skillInfo){
        if (err) return console.error(err);
        res.send(skillInfo)
    })
}

const postNewSkill = (req,res) => {
    const skillToSave = Skills(req.body)
    skillToSave.save(function (err) {
        if (err) {return console.error(err);}
        res.send(skillToSave)
      });
}

module.exports = {
    getAllClassesByPart,getClassesByName,getClassSkill,postNewSkill
}