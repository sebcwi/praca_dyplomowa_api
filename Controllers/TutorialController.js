const { ObjectId } = require('mongodb')
const Tutorials = require('../Models/Tutorial')

const getClassTutorials = (req,res) => {
    const JobName = req.query.name
    Tutorials.find({Class:JobName}).sort({Data:-1}).exec(function(err,tutorialInfo){
        if(err) return res.status(404).send(err)
        res.status(202).send(tutorialInfo)
    })
}

const getAllClassTutorials = (req,res) => {
    
    Tutorials.find().sort({Data:-1}).exec(function(err,tutorialInfo){
        if(err) return res.status(404).send(err)
        res.status(202).send(tutorialInfo)
    })
}

const getClassTutorialsByID = (req,res) => {
    const id = req.params.id
    const classTutorial = req.query.class

    if(classTutorial == 'all')
    {
        Tutorials.find({_id:ObjectId(id)}).exec(function(err,tutorialInfo){
            if(err) return res.status(404).send(err)
            res.status(202).send(tutorialInfo)
        })
    }
    else
    {
        Tutorials.find({ID:id,Class:classTutorial}).exec(function(err,tutorialInfo){
            if(err) return res.status(404).send(err)
            res.status(202).send(tutorialInfo)
        })
        
    }
    
}

const postNewTutorail = (req,res) => {

    const tutorialToSave = new Tutorials(req.body)
    tutorialToSave.save(function (err) {
        if(err) return res.status(404).send(err)
        res.status(202).send(tutorialToSave)
      });

}

module.exports = {
    getClassTutorials,getClassTutorialsByID,getAllClassTutorials,postNewTutorail
}