const Dungeon = require('../Models/Dungeons')
const DungeonTypes = require('../Models/DungeonsType')

const getDungeons = (req,res) => {
    const id = req.params.id
    const nPerPage = 10
    const skip = id>1?((id-1)*nPerPage):0
    // https://xivapi.com/InstanceContent/13?columns=Name,Description,Icon,Banner,ContentFinderCondition.ClassJobLevelRequired,ContentFinderCondition.ContentMemberType
    Dungeon.find().sort({Level:1}).skip(skip).limit(nPerPage).exec(function(err,dungeonInfo){
        if(err) return res.status(404).send(err)
        res.status(202).send(dungeonInfo)
    })
}

const getAllDungeons = (req,res) => {
    
    // https://xivapi.com/InstanceContent/13?columns=Name,Description,Icon,Banner,ContentFinderCondition.ClassJobLevelRequired,ContentFinderCondition.ContentMemberType
    Dungeon.find().sort({Level:1}).exec(function(err,dungeonInfo){
        if(err) return res.status(404).send(err)
        res.status(202).send(dungeonInfo)
    })
}

const postDungeons = (req,res)=>{
   
    const dungeonToSave = new Dungeon(req.body)
    dungeonToSave.save(function (err) {
        if(err) return res.status(404).send(err)
        res.status(202).send(dungeonToSave)
      });
}

const getDunegonsType = (req,res) => {
    DungeonTypes.find().exec(function(err,dungeonTypeInfo){
        if(err) return res.status(404).send(err)

        res.status(202).send(dungeonTypeInfo)
    })
}


module.exports = {
    getDungeons,postDungeons,getDunegonsType,getAllDungeons
}