const {Schema} = require('mongoose');
const User = new Schema({
    name: String,
    role: String,
    id: Number
}, {
    autoIndex: false,
    versionKey: false,
    collection: 'user', // 表名
    timestamps: {
      createdAt: 'create_date',
      updatedAt: 'update_date',
    },
  })

module.exports = User