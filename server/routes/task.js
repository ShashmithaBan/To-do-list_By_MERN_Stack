const express = require("express")
const router = express.Router()
const Task = require("../modals/task")

router.post("/tasks",async(req,res)=>{
    const task = new Task(req.body)
    try {
        await task.save();
        res.status(200).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/getusertask/:id", async(req,res)=>{
    try {
        const tasks = await Task.find({ owner: req.params.id });
        if(!tasks){
            res.status(404).send()
        }
        res.status(200).send(tasks)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.patch("/updatetaskstatus/:id", async (req, res) => {
    try {
       
        const taskId = req.params.id;
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).send({ error: 'Task not found' });
        }

        const newStatus = !task.completed;
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            { completed: newStatus },
            { new: true, runValidators: true }
        );

        res.status(200).send(updatedTask);
    } catch (error) {

        res.status(400).send({ error: error.message });
    }
});


module.exports = router