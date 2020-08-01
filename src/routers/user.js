const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.get('/users', async (req, res) => {
    const userData = await User.findAll()
    const users = userData.map(user => user.dataValues)
    res.status(200).send(users)
})

router.get('/users/:id', async (req, res) => {
    const user = await User.findOne({
        where: {
            userId: req.params.id
        }
    })
    console.log(user)
    res.status(200).send(user.dataValues)
})

router.post('/users', async (req, res) => {
    await User.create(req.body)
    res.status(201).send(req.body)
})

router.patch('/users/:id', (req, res) => {

})

router.delete('/users/:id', (req, res) => {

})

module.exports = router