const {Sequelize, Model} = require('sequelize');
const sequelize = require('../dataBase').getDb('coreDb')
class User extends Model {
}
User.init({
    id: {
        type: Sequelize.INTEGER(11),
        field: 'user_id',
        autoIncrement: true,
        primaryKey: true,
    },
    password: {
        type: Sequelize.STRING(30),
        field: 'pass_word'
    },
    name: {
        type: Sequelize.STRING(20),
        field: 'user_name'
    },
    tel: {
        type: Sequelize.STRING(11),
        field: 'phone'
    }
}, {
    sequelize,
    ModelName: 'User',
    tableName: 'tb_user',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
module.exports = User