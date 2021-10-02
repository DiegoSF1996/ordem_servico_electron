let sqlite = require('sqlite3')
let path = require('path');
const DAO = require('./DAO');


class TipoPagamento extends DAO {
    constructor() {
        super();
        this.tabela = "tipo_produto";
        this.pk = "tpprod_codigo";
    }

    obter(o) {
        let query = 'select * from tipo_produto where 1=1 ';
        if (o.tpprod_codigo) {
            query += ' and tpprod_codigo = ' + tpprod_codigo;
        }
        query += ' order by tpprod_descricao desc'
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
        let query = 'update tipo_produto set ';

        if (o.tpprod_descricao != undefined && o.tpprod_descricao != '') {
            query += ' tpprod_descricao = "' + o.tpprod_descricao + '"';
        }

        query += ' where tpprod_codigo = ' + o.tpprod_codigo;


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
        let query = 'insert into tipo_produto (tpprod_descricao)'
            + ' values ("' + o.tpprod_descricao +'")';

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
        let query = 'delete from tipo_produto where 1 = 1 and ';
        query += ' tpprod_codigo = ' + o.tpprod_codigo;
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
