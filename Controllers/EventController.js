const Event = require('../Models/Event')

const postEvent = (req,res) => {
    const eventToSave = new Event(req.body)

    eventToSave.save(function (err) {
        if(err) return res.status(404).send(err)
        res.status(202).send(eventToSave)
      });
}
const getAllEvents = (req,res) => {
    const part = req.query.part
    
    switch(part){
        case 'all':{
            Event.find().sort({startDate:1}).exec(function(err,eventInfo){
                if(err) return res.status(404).send(err)
                res.status(202).send(eventInfo)
            })
            break;
        }
        default:{
            Event.find({startDate: part}).sort({startDate:1}).exec(function(err,eventInfo){
                if(err) return res.status(404).send(err)
                res.status(202).send(eventInfo)
            })
        }
    }
    
}



module.exports = {
    postEvent,getAllEvents
}