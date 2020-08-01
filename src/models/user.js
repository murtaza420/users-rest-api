const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

const createTable = async () => {
    await User.sync()
    console.log('User table connected')
}

createTable()

module.exports = User
