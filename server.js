const PORT = 8000;

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const charRoutes = require('./Routes/CharacterRoutes')
const dataRoutes = require('./Routes/DataRoutes')
const userRoutes = require('./Routes/UserRoutes')
const mongDB = require('./DB/mongoose')
const swagerOption = require('./swagger/swagger.json')


app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swagerOption))
app.use(express.json())
app.use(cors())

app.use('/character',charRoutes)
app.use('/data',dataRoutes)
app.use('/user',userRoutes)


app.listen(PORT, () => {
    console.log('Aplication is running on port '+PORT)
})
