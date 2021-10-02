let oServico = require('../model/Servico')
class ServicoController {

    async listarTabela() {
        return await oServico.obter({});
    }
    salvarServico(dados) {
        //Alterar
        if (dados.ser_codigo != undefined && dados.ser_codigo != '') {
            oServico.alterar(dados);
        } else {
            //Novo
            oServico.inserir(dados);
        }
    }
    excluirServico(dados) {
        oServico.excluir(dados);
    }
    
}

module.exports = new ServicoController()