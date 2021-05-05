const {Sequelize, Model} = require('sequelize');
const sequelize =  require('../dataBase').getDb('coreDb');

class RuleModules extends Model {};

RuleModules.init({
    id: {
        type: Sequelize.INTEGER(11),
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    ruleModuleName: {
        type: Sequelize.STRING,
        field: 'rule_module_name'
    }
}, {
    sequelize,
    tableName: 'rule_module',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = RuleModules