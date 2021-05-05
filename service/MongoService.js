const User = require('../model/Mongo')
class MongoService {
    static async get () {
        return await User.create({
            name: 'abc',
            role: 'test',
            id: 10
        })
        // return 123;
    }
}

module.exports = MongoService