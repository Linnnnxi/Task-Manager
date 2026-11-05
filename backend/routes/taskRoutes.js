const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.post('/', async (req, res) => {
    try {
        const task = new Task(req.body);

        const savedTask = await task.save();

        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/", async (req, res) => {

    try {

        const tasks = await Task.find();

        res.json(tasks);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;