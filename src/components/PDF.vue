<template>
  <div>
    <p>{{ formatarData(new Date()) }}</p>
    <p style="text-align: center"><strong>ORDEM DE SERVI&Ccedil;O</strong></p>
    <hr />
    <p>INFORMA&Ccedil;&Otilde;ES DO CLIENTE</p>
    <p>
      Cliente: {{ dados.cli_descricao }}<br />Tipo de cliente:
      {{ dados.cli_pj == 1 ? "PJ" : "PF" }}
    </p>
    <p>
      INFORMA&Ccedil;&Otilde;ES DO PRODUTO<br />Tipo Aparelho:
      {{ dados.tpprod_descricao }}<br />Modelo: {{ dados.ser_modelo
      }}<br />Marca: {{ dados.ser_marca }}<br />N&uacute;mero de S&eacute;rie:
      {{ dados.ser_numeroserie }}
    </p>
    <p>
      INFORMA&Ccedil;&Otilde;ES DO SERVI&Ccedil;O<br />Servi&ccedil;o Externo:
      {{ dados.ser_externo == 1 ? "SIM" : "N&Atilde;O" }}<br />Tipo
      Servi&ccedil;o: {{ dados.tps_descricao }}<br />Data de Entrada:
      {{ formatarData(dados.ser_dataentrada) }}<br />Data de Sa&iacute;da:
      {{ formatarData(dados.ser_datasaida) }}<br />Observa&ccedil;&atilde;o:
      {{ dados.ser_observacao }}
    </p>
    <p>
      <br />INFORMA&Ccedil;&Otilde;ES DE PAGAMENTO<br />Tipo Pagamento:
      {{ dados.tpp_descricao }}<br />Valor Pagamento:
      {{ dados.ser_valorpagamento }} R$<br />Data Pagamento: {{
        formatarData(dados.ser_datapagamento)
      }}<br /><br />
    </p>
  </div>
</template>
<script>
export default {
  name: "PDF",
  props: { dados: Object },
  data: () => ({ teste: "as" }),
  methods: {
    formatarData(date) {
      let dataMoment = this.$moment(date).format("DD/MM/YYYY");

      return dataMoment;
    },
    /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
  },
};
</script>