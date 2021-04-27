const User = require('../model/User');
class UserService {
    static async getUser () {
        const reslut = await User.findOne({
            where: {
                id: 1
            }
        })
        return reslut.dataValues
    }
}
module.exports = UserService