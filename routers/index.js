const routers = require('koa-router')();
const UserController = require('../controller/UserController')
const RoleController = require('../controller/RoleController')
const RuleModuleController = require('../controller/RuleModuleController')
const MongoController = require('../controller/MongoController')
routers.get('/createTable', UserController.createTable);
routers.get('/role', RoleController.getRole);
routers.get('/roleModule', RuleModuleController.get)
routers.get('/mongo', MongoController.get)

module.exports = routers;