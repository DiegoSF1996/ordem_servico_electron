let sqlite = require('sqlite3')
let path = require('path');
const DAO = require('./DAO');


class Servico extends DAO {
    constructor() {
        super();
        this.tabela = "view_servico";
        this.pk = "ser_codigo";
    }

    obter(o = null) {
        let query = 'select * from view_servico where 1=1 ';
        if (o.ser_codigo) {
            query += ' and ser_codigo = ' + o.ser_codigo;
        }
        query += ' order by ser_codigo desc'
        let db = this.getDB();
        return new Promise(function (resolve, reject) {
            db.serialize(function () {
                db.all(query, function (err, rows) {
                    if (!err) {
                        resolve(rows)
                    } else {
                        reject(err)
                    }
                })
            })
        });

    }
}

module.exports = new Servico()
