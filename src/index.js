const express = require('express')
require('./db/sequelize')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
// Add routers for path /users
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on Port ' + port)
})