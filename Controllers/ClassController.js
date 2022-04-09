const Classes = require('../Models/Class')
const Dungeon = require('../Models/Dungeons')
const Skills = require('../Models/Skills')

const getAllClassesByPart = (req,res) => {
    const filter = req.query.part
    switch(filter)
    {
        case 'all':{
            Classes.find().sort({Disciplies:-1}).exec(function (err, classInfo) {
                if(err) return res.status(404).send(err)
                res.status(202).send(classInfo)
              })
            break;
        }
        default:{
            Classes.find({Part:filter}).exec(function (err, classInfo) {
                if(err) return res.status(404).send(err)
                res.status(202).send(classInfo)
              })
        }
    }
    
}

const getClassesByName = (req,res) => {
    const filter = req.query.name
    Classes.find({Name:filter}).exec(function (err, classInfo) {
        if(err) return res.status(404).send(err)
        res.status(202).send(classInfo)
      })
}

const getClassSkill = (req,res) => {
    const JobName = req.query.name
    switch(JobName)
    {
        case 'all':{
            Skills.find().sort({idSkill:1}).exec(function(err,skillInfo){
                if(err) return res.status(404).send(err)
                res.status(202).send(skillInfo)
            })
            break;
        }
        default:{
            Skills.find({Class:JobName}).sort({Level:1}).exec(function(err,skillInfo){
                if(err) return res.status(404).send(err)
                res.status(202).send(skillInfo)
            })
        }
    }
    
}

const postNewSkill = (req,res) => {
    const skillToSave = Skills(req.body)
    skillToSave.save(function (err) {
        if(err) return res.status(404).send(err)
        res.status(202).send(skillToSave)
      });
}

const addNewClass = (req,res) => {
    const classToSave = Classes(req.body)
    classToSave.save(function (err) {
        if(err) return res.status(404).send(err)
        res.status(202).send(classToSave)
      });

}
const getSkill = (req,res) => {
    console.log(req.query.id)
    Skills.find({idSkill:req.query.id}).exec(function(err,skillInfo){
        if(err) return res.status(404).send(err)
        res.status(202).send(skillInfo)
    })
}

module.exports = {
    getAllClassesByPart,getClassesByName,getClassSkill,postNewSkill,addNewClass,getSkill
}