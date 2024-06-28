const Task = require('../models/Task');

const addTask = async (req, res, next) => {
    const {name, description, status} = req.body;
    try {
        const task = new Task({name, description, status: false});
        await task.save();
        return res.status(201).json({message: "Successfully Added"});
    } catch (err) {
        next (err);
    }
};

const listTask = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        if (tasks.length === 0) {
            return res.status(200).json({message: "No tasks available"});
        }
        return res.status(200).json(tasks);
    } catch (err) {
       next (err);
    }
};

const getTask = async (req, res, next) => {
    const id = req.params.id;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({message: "Task not found"});    
        }
        return res.status(200).json(task);
    } catch (err) {
        next (err);
    }
};

const updateStatus = async (req, res, next) => {
    const id = req.params.id;
    try {
        const task = await Task.findById(id);
        task.status = !task.status;
        await task.save();
        return res.status(200).json({message: "Updated Successfully", task})
    } catch (err) {
        next (err);
    }
};

const deleteTask = async (req, res, next) => {
    const id = req.params.id;
    try {
        const task = await Task.findByIdAndDelete(id);
        return res.status(200).json({message: "Deleted Successfully"})
    } catch (err) {
        next (err);
    }
};

const editTask = async (req, res, next) => {
    const id = req.params.id;
    const {name, description} = req.body;
    try {
        const task = await Task.findById(id);
        task.name = name,
        task.description = description
        await task.save();
        return res.status(200).json({message : "Task Edited Successfully"});
    } catch (err) {
        next (err);
    }
} 

module.exports = {
    addTask,
    listTask,
    getTask,
    updateStatus,
    deleteTask,
    editTask
};


