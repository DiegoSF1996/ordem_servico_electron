let oServico = require('../model/servico')
class ServicoController {

    async listarTabela() {
        return await oServico.obter({});
    }
}

module.exports = new ServicoController()