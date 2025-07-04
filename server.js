const PORT = 8000;

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const serverHealthRoutes = require('./Routes/ServerHealthRoutes')
const charRoutes = require('./Routes/CharacterRoutes')
const dataRoutes = require('./Routes/DataRoutes')
const userRoutes = require('./Routes/UserRoutes')
const classesRoutes = require('./Routes/ClassesRoutes')
const dungeonRoutes = require('./Routes/DungeonRoutes')
const tutorialRouter = require('./Routes/TutorialRoutes')
const dlcRoutes = require('./Routes/DlcRoutes')
const historyRoutes = require('./Routes/HistoryRoutes')
const FileRoutes = require('./Routes/FilesRoutes')
const NewsRoutes = require('./Routes/NewsRoutes')
const EventRoutes = require('./Routes/EventRoutes')
const AdminRoutes = require('./Routes/AdminRoutes')

const mongDB = require('./DB/mongoose')
const swagerOption = require('./swagger/swagger.json')


app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swagerOption))
app.use(express.json())
app.use(cors({origin: true, credentials: true}))

app.use('/health',serverHealthRoutes)
app.use('/character',charRoutes)
app.use('/data',dataRoutes)
app.use('/classes',classesRoutes)
app.use('/dungeons',dungeonRoutes)
app.use('/tutorial',tutorialRouter)
app.use('/user',userRoutes)
app.use('/dlc',dlcRoutes)
app.use('/history',historyRoutes)
app.use('/file',FileRoutes)
app.use('/news',NewsRoutes)
app.use('/events',EventRoutes)
app.use('/admin',AdminRoutes)



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT} and swagger: http://localhost:${PORT}/api-docs`)
  })

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI0NTVmMDhmMDUxZDAxNmQ4NzZmOTY0IiwiZW1haWwiOiJnZ0BnZy5wbCIsInVzZXJuYW1lIjoiZ29tYWthc2hpMTEiLCJpYXQiOjE2NDk0MTE1MjcsImV4cCI6MTY0OTQxODcyN30.-3DQ4yLf7cEzh4cAC_WxmBgnQ3tpnkH57b2xZHI5ZbY