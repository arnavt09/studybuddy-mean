const express = require('express');

const router = express.Router();

const { 
    getTasks, 
    createTask,
    getTaskById,
    deleteTask,
    updateTask
} = require('../controllers/task.controller');

router.get('/', getTasks);

router.post('/', createTask);

router.get('/:id', getTaskById);

router.delete('/:id', deleteTask);

router.patch('/:id', updateTask);

module.exports = router;