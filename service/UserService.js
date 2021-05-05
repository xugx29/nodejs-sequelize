const User = require('../model/User');
const Role = require('../model/Role')
const UserRoleMapping1 = require('../model/UserRoleMapping1')
const sequelize = require('../dataBase').getDb('coreDb')
User.belongsToMany(Role, { through: UserRoleMapping1, foreignKey: 'userId' });
Role.belongsToMany(User, { through: UserRoleMapping1, foreignKey: 'roleId' });
class UserService {
    static async getUser (id) {
        let a = await User.findOne({
            where: {
                id: 104
            }
        })
        const queryRole = await Role.findAll({
            where: {
                name: {
                $in: ['ADMIN'],
              },
            }
          })
        a.addRole(queryRole)
        return await User.findAll(
            {   
                where: {
                    id: {
                        $gt: [2000, 'asc']
                    }
                },
                include: {
                    model: Role
                }
            }
        )
        
    }
}
module.exports = UserService