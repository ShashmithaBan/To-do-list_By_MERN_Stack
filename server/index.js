const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = 5001

const mongoUrl = "mongodb+srv://Shashmitha1:pass123@cluster01.wbz605h.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster01"

mongoose.connect(mongoUrl,
    {useNewUrlParser:true,
        useUnifiedTopology:true
    }
)

const connection = mongoose.connection

connection.once("open",()=>{
     console.log("MongoDB connected!")
})

app.listen(port,()=>{
    console.log('server is up and running on port '+port)
})