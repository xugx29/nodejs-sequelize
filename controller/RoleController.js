const RoleService = require('../service/RoleService')
class RoleController {
    static async getRole (ctx) {
        ctx.body = await RoleService.getRole();
    }
}

module.exports = RoleController