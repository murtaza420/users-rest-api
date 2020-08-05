const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
    }
})

module.exports = User
