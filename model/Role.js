const {Sequelize, Model} = require('sequelize');
const sequelize = require('../dataBase').getDb('coreDb')
class Role extends Model {
}
Role.init({
    id: {
        type: Sequelize.INTEGER(11),
        field: 'role_id',
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(20),
        field: 'role_name'
    }
}, {
    sequelize,
    ModelName: 'Role',
    tableName: 'tb_role',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
module.exports = Role