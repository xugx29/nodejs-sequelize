const {Sequelize, Model} = require('sequelize');
const sequelize = require('../dataBase').getDb('coreDb')
class UserRoleMapping extends Model {
}
UserRoleMapping.init(
  {
    id: {
      type: Sequelize.BIGINT(11),
      field: 'id',
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.BIGINT(11),
      field: 'user_id',
      allowNull: true,
    },
    roleId: {
      type: Sequelize.BIGINT(11),
      field: 'role_id',
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'user_role_mapping',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

module.exports = UserRoleMapping;
