let oCliente = require('../model/Cliente')
class ClienteController {

    async listarTabela() {
        return await oCliente.obter({});
    }
    salvarCliente(dados) {
        //Alterar
        if (dados.cli_codigo != undefined && dados.cli_codigo != '') {
            oCliente.alterar(dados);
        } else {
            //Novo
            oCliente.inserir(dados);
        }
    }
    excluirCliente(dados) {
        oCliente.excluir(dados);
    }
}

module.exports = new ClienteController()