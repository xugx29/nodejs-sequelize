const Sequelize = require('sequelize');
const dataBase = {
    config: {
        host: '127.0.0.1',
        port: '3308',
        username: 'root',
        password: '123',
        database: 'QuantgroupTest'
    },
    init () {
        return new Sequelize(this.config.database, this.config.username, this.config.password, {
            host: this.config.host,
            dialect: 'mysql',
            port: this.config.port
        })
    }
}
module.exports = dataBase