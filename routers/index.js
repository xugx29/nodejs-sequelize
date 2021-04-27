const routers = require('koa-router')();
const UserController = require('../controller/UserController')

routers.get('/createTable', UserController.createTable);

module.exports = routers;