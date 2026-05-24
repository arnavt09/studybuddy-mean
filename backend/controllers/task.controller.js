const Task = require('../models/task.model');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        res.json(tasks);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const createTask = async (req, res) => {
    try {

        const task = new Task(req.body);

        const savedTask = await task.save();

        res.status(201).json(savedTask);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

module.exports = {
    getTasks,
    createTask
};