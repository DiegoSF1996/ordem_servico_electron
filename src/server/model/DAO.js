let sqlite = require('sqlite3')
let path = require('path')
const fs = require('fs');


module.exports =  class DAO {

    constructor() {
       // if (fs.existsSync(path.join(__dirname, '../bd/ordem_servico.db'))) {
            this.db = new sqlite.Database(path.join(__dirname, '../bd/ordem_servico.db'));
       // }
    }
    getDB(){
        return this.db;
    }
}
