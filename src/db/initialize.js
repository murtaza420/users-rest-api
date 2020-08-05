const sequelize = require('./sequelize')
const User = require('../models/user')
const Task = require('../models/task')

User.hasMany(Task, {
    foreignKey: {
        name: 'userId'
    },
    onDelete: 'CASCADE'
})
Task.belongsTo(User, {
    foreignKey: 'userId'
})

const createTables = async () => {
    await User.sync()
    await Task.sync()
    console.log('Tables connected')
}

createTables()