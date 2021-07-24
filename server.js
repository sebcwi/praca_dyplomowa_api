const express = require('express')
const app = express()
const cors= require('cors')

const charRoutes = require('./Routes/CharacterRoutes')
const dataRoutes = require('./Routes/DataRoutes')


app.use(cors())

app.use('/character',charRoutes)
app.use('/data',dataRoutes)


app.listen(3001, () => {
    console.log('Aplication is running on port 3001')
})
