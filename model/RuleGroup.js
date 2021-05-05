const {Sequelize, Model} = require('sequelize');
const sequelize = require('../dataBase').getDb('coreDb');

class RuleGroup extends Model {};

RuleGroup.init({
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        field: 'rule_group_name'
    }
}, {
    sequelize,
    tableName: 'rule_group',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}) 

module.exports = RuleGroup;