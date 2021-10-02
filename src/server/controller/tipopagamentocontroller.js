let oTipoPagamento = require('../model/TipoPagamento')
class TipoPagamentoController {

    async listarTabela() {
        return await oTipoPagamento.obter({});
    }
    salvarTipoPagamento(dados) {
        //Alterar
        if (dados.tpp_codigo != undefined && dados.tpp_codigo != '') {
            oTipoPagamento.alterar(dados);
        } else {
            //Novo
            oTipoPagamento.inserir(dados);
        }
    }
    excluirTipoPagamento(dados) {
        oTipoPagamento.excluir(dados);
    }
}

module.exports = new TipoPagamentoController()