const User = require('../model/User');
const Role = require('../model/Role');
const UserRoleMapping1 = require('../model/UserRoleMapping1');
const sequelize = require('../dataBase').getDb('coreDb');

User.belongsToMany(Role, {
    through: UserRoleMapping1,
    foreignKey:  'userId'
})

Role.belongsToMany(User, {
    through: UserRoleMapping1,
    foreignKey: 'roleId'
})

class UserService {
    static async getRole () {
        return await Role.findAll({
            include: {
                model: User
            }
        })
    }
}

module.exports = UserService;