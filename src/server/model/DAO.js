let sqlite = require('sqlite3')
let path = require('path')
const fs = require('fs');

const isDevelopment = process.env.NODE_ENV !== 'production'
module.exports = class DAO {

    constructor() {
        // if (fs.existsSync(path.join(__dirname, '../bd/ordem_servico.db'))) {
        // this.db = new sqlite.Database(path.join(__dirname, '../bd/ordem_servico.db'));
        // }
        if (isDevelopment) {
            this.db = new sqlite.Database(path.join(__dirname, '../bd/ordem_servico.db'));
        } else {
            this.db = new sqlite.Database('./resources/bd/ordem_servico.db');
        }
    }
    getDB() {
        return this.db;
    }
}
