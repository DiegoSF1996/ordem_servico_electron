let sqlite = require('sqlite3')
let path = require('path');
const DAO = require('./DAO');


class TipoPagamento extends DAO {
    constructor() {
        super();
        this.tabela = "tipo_pagamento";
        this.pk = "tpp_codigo";
    }

    obter(o) {
        let query = 'select * from tipo_pagamento where 1=1 ';
        if (o.tpp_codigo) {
            query += ' and tpp_codigo = ' + tpp_codigo;
        }
        query += ' order by tpp_descricao desc'
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
    alterar(o) {
        let query = 'update tipo_pagamento set ';

        if (o.tpp_descricao != undefined && o.tpp_descricao != '') {
            query += ' tpp_descricao = "' + o.tpp_descricao + '"';
        }

        query += ' where tpp_codigo = ' + o.tpp_codigo;


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
    inserir(o) {
        let query = 'insert into tipo_pagamento (tpp_descricao)'
            + ' values ("' + o.tpp_descricao +'")';

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
    excluir(o) {
        let query = 'delete from tipo_pagamento where 1 = 1 and ';
        query += ' tpp_codigo = ' + o.tpp_codigo;
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

module.exports = new TipoPagamento()
