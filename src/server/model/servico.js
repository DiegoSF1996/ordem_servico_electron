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
    alterar(o) {
        let query = 'update servico set ';

        if (o.cli_codigo != undefined && o.cli_codigo != null) {
            query += ' cli_codigo = "' + o.cli_codigo+'"';
        }
        if (o.tps_codigo != undefined && o.tps_codigo != null) {
            query += ', tps_codigo = "' + o.tps_codigo+'"';
        }
        if (o.tpp_codigo != undefined && o.tpp_codigo != null) {
            query += ', tpp_codigo = "' + o.tpp_codigo+'"';
        }
        if (o.ser_marca != undefined && o.ser_marca != null) {
            query += ', ser_marca = "' + o.ser_marca + '"';
        }
        if (o.ser_numeroserie != undefined && o.ser_numeroserie != null) {
            query += ', ser_numeroserie = "' + o.ser_numeroserie + '"';
        }
        if (o.ser_modelo != undefined && o.ser_modelo != null) {
            query += ', ser_modelo = "' + o.ser_modelo + '"';
        }
        if (o.ser_dataentrada != undefined && o.ser_dataentrada != null) {
            query += ', ser_dataentrada = "' + o.ser_dataentrada+'"';
        }
        if (o.ser_datasaida != undefined && o.ser_datasaida != null) {
            query += ', ser_datasaida = "' + o.ser_datasaida+'"';
        }
        if (o.ser_datapagamento != undefined && o.ser_datapagamento != null) {
            query += ', ser_datapagamento = "' + o.ser_datapagamento+'"';
        }
        if (o.ser_valorpagamento != undefined && o.ser_valorpagamento != null) {
            query += ', ser_valorpagamento = "' + o.ser_valorpagamento+'"';
        }
        if (o.ser_externo != undefined && o.ser_externo != null) {
            query += ', ser_externo = "' + o.ser_externo+'"';
        }
        if (o.ser_observacao != undefined && o.ser_observacao != null) {
            query += ', ser_observacao = "' + o.ser_observacao + '"';
        }
        if (o.tpprod_codigo != undefined && o.tpprod_codigo != null) {
            query += ', tpprod_codigo = "' + o.tpprod_codigo+'"';
        }

        query += ' where ser_codigo = ' + o.ser_codigo;

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


        Object.keys(o).forEach(function (key) {

            if (o[key] == null) {
                o[key] = '';
            }

        });
        let query = "insert into servico ";
        query += "( cli_codigo, tps_codigo, tpp_codigo, ser_marca, ser_numeroserie,";
        query += " ser_modelo, ser_dataentrada, ser_datasaida, ser_datapagamento, ser_valorpagamento, ser_externo, ser_observacao, tpprod_codigo)";

        query += ' values ("' + o.cli_codigo + '",' + '"' + o.tps_codigo + '",' + '"' + o.tpp_codigo + '",' + '"' + o.ser_marca + '",' + '"' + o.ser_numeroserie + '",' + '"' + o.ser_modelo + '",' + '"' + o.ser_dataentrada + '",' + '"' + o.ser_datasaida + '",' + '"' + o.ser_datapagamento + '",' + '"' + o.ser_valorpagamento + '",' + '' + o.ser_externo + ',' + '"' + o.ser_observacao + '",' + '"' + o.tpprod_codigo + '"' + ')';
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
        let query = 'delete from servico where 1 = 1 and ';
        query += ' ser_codigo = ' + o.ser_codigo;
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
