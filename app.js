const koa = require('koa');
const app = new koa();
const routers = require('./routers')
const dataBase = require('./dataBase')

dataBase.init();

app.use(routers.routes())
app.listen(3000)