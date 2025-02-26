const mongoose = require("mongoose")

const Schema = mongoose.Schema

const taskSchema = new Schema({
    description : {
        type : String,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        required:true
    }
    
})

const Task = mongoose.model("Task" , taskSchema)

module.exports = Task