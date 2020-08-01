const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.get('/users', async (req, res) => {
    try {
        const userData = await User.findAll()
        const users = userData.map(user => user.dataValues)
        res.status(200).send(users)
    }
    catch (error) {
        res.status(500).send()
    }
})

router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                userId: req.params.id
            }
        })
        console.log(user)
        res.status(200).send(user.dataValues)
    }
    catch (error) {
        res.status(404).send()
    }
})

router.post('/users', async (req, res) => {
    try {
        await User.create(req.body)
        res.status(201).send(req.body)
    }
    catch (error) {
        res.status(400).send(error.errors)
    }
})

router.patch('/users/:id', async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                userId: req.params.id
            }
        })
        res.status(200).send()
    } catch (error) {
        res.status(400).send()
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.destroy({
            where: {
                userId: req.params.id
            }
        })
        if (deletedUser) {
            res.status(200).send()
        }
        else {
            res.status(404).send()
        }
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router