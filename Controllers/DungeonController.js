const Dungeon = require('../Models/Dungeons')

const getDungeons = (req,res) => {
    const id = req.params.id
    const nPerPage = 10
    const skip = id>1?((id-1)*nPerPage):0
    // https://xivapi.com/InstanceContent/13?columns=Name,Description,Icon,Banner,ContentFinderCondition.ClassJobLevelRequired,ContentFinderCondition.ContentMemberType
    Dungeon.find().sort({Level:1}).skip(skip).limit(nPerPage).exec(function(err,dungeonInfo){
        if (err) return console.error(err);
        res.send(dungeonInfo)
    })
}

const postDungeons = (req,res)=>{
   
    const dungeonToSave = new Dungeon(req.body)
    dungeonToSave.save(function (err) {
        if (err) {return console.error(err);}
        res.send(dungeonToSave)
      });
}

module.exports = {
    getDungeons,postDungeons
}