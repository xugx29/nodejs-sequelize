const RoleModuleService = require('../service/RoleModuleService')
class RuleModuleController {
    static async get (ctx) {
        ctx.body = await RoleModuleService.getRoleModules();
    }
}

module.exports = RuleModuleController;