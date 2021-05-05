const Sequelize = require('sequelize');

const DbObject = {
  coreDb: null
};


const dbConfig = {
    host: '127.0.0.1',
    port: '3308',
    username: 'root',
    password: '',
    database: 'workflow'
}
function sequelizeFactory() {
  return new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    // host: dbConfig.host,
    // port: dbConfig.port || 3306,
    host: '127.0.0.1',
    port: 3308,
    dialect: 'mysql'
  });
}
exports.init = () => {
  DbObject.coreDb = sequelizeFactory();
};
exports.getDb = dbName => DbObject[dbName];
