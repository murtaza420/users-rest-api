const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mydb', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize