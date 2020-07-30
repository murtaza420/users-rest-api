const express = require('express')
const router = new express.Router()

router.get('/users', (req, res) => {
    const users = [{
        name: 'Murtaza',
        age: 25
    },
    {
        name: 'Matt',
        age: 22
    }
    ]
    res.status(200).send(users)
})

router.post('/users', (req, res) => {
    console.log(req.body)
    res.status(201).send(req.body)
})

module.exports = router