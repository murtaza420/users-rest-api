const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    dueDate: {
        type: DataTypes.DATEONLY,
    }
})

module.exports = Task