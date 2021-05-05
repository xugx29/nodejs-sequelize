const MongoService = require('../service/MongoService');

class MongoController {
    static async get (ctx) {
        ctx.body = await MongoService.get()
    }
}

module.exports = MongoController