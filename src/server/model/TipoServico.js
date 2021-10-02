let sqlite = require('sqlite3')
let path = require('path');
const DAO = require('./DAO');


class TipoServico extends DAO {
    constructor() {
        super();
        this.tabela = "tipo_servico";
        this.pk = "tps_codigo";
    }

    obter(o) {
        let query = 'select * from tipo_servico where 1=1 ';
        if (o.tps_codigo) {
            query += ' and tps_codigo = ' + tps_codigo;
        }
        query += ' order by tps_descricao desc'
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
        let query = 'update tipo_servico set ';

        if (o.tps_descricao != undefined && o.tps_descricao != '') {
            query += ' tps_descricao = "' + o.tps_descricao + '"';
        }

        query += ' where tps_codigo = ' + o.tps_codigo;


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
        let query = 'insert into tipo_servico (tps_descricao)'
            + ' values ("' + o.tps_descricao +'")';

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
        let query = 'delete from tipo_servico where 1 = 1 and ';
        query += ' tps_codigo = ' + o.tps_codigo;
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

module.exports = new TipoServico()
