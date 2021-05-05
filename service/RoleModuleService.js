const RuleModules = require('../model/RuleModules');
const RuleGroup = require('../model/RuleGroup');

RuleModules.belongsTo(RuleGroup, {
    foreignKey: 'id'
})
class RoleModuleService {
    static async getRoleModules () {
        return await RuleModules.findAll({
            include: {
                model: RuleGroup
            }
        });
    }
}

module.exports = RoleModuleService;