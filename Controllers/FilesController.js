
const getFile = (req,res) => {
    const fileName = req.params.name;
    res.download('./Images/'+fileName)
}

module.exports = {
    getFile
}