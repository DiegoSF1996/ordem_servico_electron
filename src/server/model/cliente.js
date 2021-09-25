let sqlite = require('sqlite3')
let path = require('path');
const DAO = require('./DAO');


class Cliente extends DAO {
    constructor() {
        super();
        this.tabela = "cliente";
        this.pk = "cli_codigo";
    }

    obter(o) {
        let query = 'select * from cliente where 1=1 ';
        if (o.cli_codigo) {
            query += ' and cli_codigo = ' + cli_codigo;
        }
        query += ' order by cli_descricao desc'
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
        let query = 'update cliente set ';

        if (o.cli_descricao != undefined && o.cli_descricao != '') {
            query += ' cli_descricao = "' + o.cli_descricao + '"';
        }

        if (o.cli_endereco != undefined && o.cli_endereco != '') {
            query += ', cli_endereco = "' + o.cli_endereco + '"';
        }

        if (o.cli_cep != undefined && o.cli_cep != '') {
            query += ', cli_cep = "' + o.cli_cep + '"';
        }

        if (o.cli_bairro != undefined && o.cli_bairro != '') {
            query += ', cli_bairro = "' + o.cli_bairro + '"';
        }

        if (o.cli_telefone != undefined && o.cli_telefone != '') {
            query += ', cli_telefone = "' + o.cli_telefone + '"';
        }

        if (o.cli_email != undefined && o.cli_email != '') {
            query += ', cli_email = "' + o.cli_email + '"';
        }

        if (o.cli_pj != undefined && o.cli_pj != '') {
            query += ', cli_pj = "' + o.cli_pj + '"';
        }

        query += ' where cli_codigo = ' + o.cli_codigo;


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
        let query = 'insert into cliente (cli_descricao, cli_endereco, cli_cep, cli_bairro, cli_telefone, cli_email, cli_pj)'
            + ' values ("' + o.cli_descricao + '","' + o.cli_endereco + '","' + o.cli_cep + '","' + o.cli_bairro + '","' + o.cli_telefone + '","' + o.cli_email + '","' + o.cli_pj + '")';

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
        let query = 'delete from cliente where 1 = 1 and ';
        query += ' cli_codigo = ' + o.cli_codigo;
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

module.exports = new Cliente()
