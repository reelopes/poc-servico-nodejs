const Datastore = require('nedb'),
    dbName = 'data/data.db'

db = new Datastore({
    filename: dbName,
    autoload: true
});
console.log('Banco ' + dbName + ' pronto para uso')

module.exports = db;