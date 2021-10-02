let oTipoProduto = require('../model/TipoProduto')
class TipoProdutoController {

    async listarTabela() {
        return await oTipoProduto.obter({});
    }
    salvarTipoProduto(dados) {
        //Alterar
        if (dados.tpprod_codigo != undefined && dados.tpprod_codigo != '') {
            oTipoProduto.alterar(dados);
        } else {
            //Novo
            oTipoProduto.inserir(dados);
        }
    }
    excluirTipoProduto(dados) {
        oTipoProduto.excluir(dados);
    }
}

module.exports = new TipoProdutoController()