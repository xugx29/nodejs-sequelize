const UserService = require('../service/UserService')
class UserController {
    static async createTable (ctx) {
        ctx.body = await UserService.getUser();
    }
}
module.exports = UserController;