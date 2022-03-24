const Ping = (req,res) => {
    try
    {
        res.status(200).send('Pong')
    }
    catch(err)
    {
        console.log(err)
        res.status(404).send(err)
    }
}

module.exports = {
    Ping
}