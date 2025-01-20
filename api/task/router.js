// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');
const router = express.Router();

// GET all tasks with project details
router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.getTasks();
        res.status(200).json(tasks);
    } catch (err) {
        next(err);
    }
});

// POST a new task
router.post('/', async (req, res, next) => {
    try {
        const newTask = await Task.addTask(req.body);
        res.status(201).json(newTask);
    } catch (err) {
        next(err);
    }
});

module.exports = router;