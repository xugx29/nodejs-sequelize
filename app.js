const koa = require('koa');

(async () => {
    require('./dataBase').init();
    require('./mongoDB');
    const routers = require('./routers')
    const app = new koa();
    app.use(routers.routes())
    app.listen(3000)
})()