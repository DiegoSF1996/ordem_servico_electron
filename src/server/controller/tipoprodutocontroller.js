let oTipoProduto = require('../model/tipoproduto')
class TipoProdutoController {

    async listarTabela() {
        return await oCliente.obter({});
    }
    salvarCliente(dados) {
        //Alterar
        if (dados.tpprod_codigo != undefined && dados.tpprod_codigo != '') {
            oTipoProduto.alterar(dados);
        } else {
            //Novo
            oTipoProduto.inserir(dados);
        }
    }
    excluirCliente(dados) {
        oTipoProduto.excluir(dados);
    }
}

module.exports = new TipoProdutoController()