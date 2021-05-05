(function () {
    require('../schema/mongoSchema')
})()
const User = require('../model/Mongo')
class MongoService {
    static async get () {
        return await User.find().where({
            role: {$ne: null}
        })
        // return 123;
    }
}

module.exports = MongoService