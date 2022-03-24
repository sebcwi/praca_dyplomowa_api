const http = require('http');
var request = require('request');

const getNewsByPart = (req,res) => {
    
    if(req.query.part === undefined)
    {
        request('http://na.lodestonenews.com/news/all', function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.status(202).send(body) // Print the google web page.
            }
            else
            {
                res.status(404).send(error)
            }
        })
    }
    else
    {
        request('http://na.lodestonenews.com/news/'+req.query.part, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.status(202).send(body) // Print the google web page.
            }
            else
            {
                res.status(404).send(err)
            }
        })
    }  

}


module.exports = {
    getNewsByPart
}