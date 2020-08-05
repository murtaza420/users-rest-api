const express = require('express')
const router = new express.Router()
const Task = require('../models/task')
const sequelize = require('../db/sequelize')
const { QueryTypes } = require('sequelize')

// Get all tasks of a user
router.get('/tasks', async (req, res) => {
    try {
        if (!req.body.userId) {
            return res.status(404).send()
        }
        const taskData = await Task.findAll({
            where: {
                userId: req.body.userId
            }
        })
        if (taskData) {
            const tasks = taskData.map(task => task.dataValues)
            res.status(200).send(tasks)
        }
        else {
            res.status(404).send()
        }

    }
    catch (error) {
        res.status(500).send()
    }
})

router.post('/tasks', async (req, res) => {
    try {
        await Task.create(req.body)
        res.status(201).send(req.body)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

// Gets the nearest due task
router.get('/tasks/upcoming', async (req, res) => {
    try {
        const tasks = await sequelize.query('select * from tasks where dueDate in (select min(dueDate) from tasks where userId=' + req.body.userId + ') and userId=' + req.body.userId + ';', {
            type: QueryTypes.SELECT
        })
        res.status(200).send(tasks)
    } catch (error) {
        res.status(500).send(error.errors)
    }
})

module.exports = router
