const mongoose = require("mongoose")

const mongoUrl = "mongodb+srv://Shashmitha1:pass123@cluster01.wbz605h.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster01"

mongoose.connect(mongoUrl,
    {useNewUrlParser:true,
        useUnifiedTopology:true
    }
)

const connection = mongoose.connection
mongoose.set('strictQuery', true)

connection.once("open",()=>{
     console.log("MongoDB connected!")
})