const Tutorials = require('../Models/Tutorial')

const getClassTutorials = (req,res) => {
    const JobName = req.query.name
    Tutorials.find({Class:JobName}).sort({Data:-1}).exec(function(err,tutorialInfo){
        if (err) return console.error(err);
        res.send(tutorialInfo)
    })
}

const getAllClassTutorials = (req,res) => {
    
    Tutorials.find().sort({Data:-1}).exec(function(err,tutorialInfo){
        if (err) return console.error(err);
        res.send(tutorialInfo)
    })
}

const getClassTutorialsByID = (req,res) => {
    const id = req.params.id
    const classTutorial = req.query.class
    Tutorials.find({ID:id,Class:classTutorial}).exec(function(err,tutorialInfo){
        if (err) return console.error(err);
        res.send(tutorialInfo)
    })
}

const postNewTutorail = (req,res) => {

    const tutorialToSave = new Tutorials(req.body)
    tutorialToSave.save(function (err) {
        if (err) {return console.error(err);}
        res.send(tutorialToSave)
      });

}

module.exports = {
    getClassTutorials,getClassTutorialsByID,getAllClassTutorials,postNewTutorail
}