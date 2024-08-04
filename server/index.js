const express = require("express")
require('./db/mongoose')
const bodyParser = require("body-parser")
const cors = require("cors")
const userRouter = require("./routes/user")
const taskRouter = require("./routes/task")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(userRouter)
app.use(taskRouter)

const port = 5001

app.listen(port,()=>{
    console.log('server is up and running on port '+port)
})