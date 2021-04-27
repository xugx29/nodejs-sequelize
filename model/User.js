const {Sequelize, Model} = require('sequelize');
const sequelize = require('../dataBase').init()
class User extends Model {
}
User.init({
    id: {
        type: Sequelize.INTEGER(11),
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(20),
        field: 'name'
    },
    tel: {
        type: Sequelize.STRING(11),
        field: 'tel'
    }
}, {
    sequelize,
    ModelName: 'User',
    tableName: 'user',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
module.exports = User