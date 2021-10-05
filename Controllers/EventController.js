const Event = require('../Models/Event')

const postEvent = (req,res) => {
    const eventToSave = new Event(req.body)

    eventToSave.save(function (err) {
        if (err) {return console.error(err);}
        res.send(eventToSave)
      });
}
const getAllEvents = (req,res) => {
    const part = req.query.part
    
    switch(part){
        case 'all':{
            Event.find().sort({startDate:1}).exec(function(err,eventInfo){
                if (err) return console.error(err);
                res.send(eventInfo)
            })
            break;
        }
        default:{
            Event.find({startDate: part}).sort({startDate:1}).exec(function(err,eventInfo){
                if (err) return console.error(err);
                res.send(eventInfo)
            })
        }
    }
    
}



module.exports = {
    postEvent,getAllEvents
}