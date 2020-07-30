const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mydb', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
})

const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection Successful')
    }
    catch (e) {
        console.log(e)
    }
}

testConnection()