let oTipoServico = require('../model/TipoServico')
class TipoServicoController {

    async listarTabela() {
        return await oTipoServico.obter({});
    }
    salvarTipoServico(dados) {
        //Alterar
        if (dados.tps_codigo != undefined && dados.tps_codigo != '') {
            oTipoServico.alterar(dados);
        } else {
            //Novo
            oTipoServico.inserir(dados);
        }
    }
    excluirTipoServico(dados) {
        oTipoServico.excluir(dados);
    }
}

module.exports = new TipoServicoController()