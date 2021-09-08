const Tutorials = require('../Models/Tutorial')

const getClassTutorials = (req,res) => {
    const JobName = req.query.name
    Tutorials.find({Class:JobName}).sort().exec(function(err,tutorialInfo){
        if (err) return console.error(err);
        res.send(tutorialInfo)
    })
}

const getClassTutorialsByID = (req,res) => {
    const id = req.params.id
    Tutorials.find({ID:id}).exec(function(err,tutorialInfo){
        if (err) return console.error(err);
        res.send(tutorialInfo)
    })
}

module.exports = {
    getClassTutorials,getClassTutorialsByID
}