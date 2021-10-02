<template>
  <div>
    <b-card no-body>
      <b-card-header header-tag="nav">
        <!-- <b-nav card-header tabs>
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Inactive</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav> -->
      </b-card-header>

      <b-card-body class="text-left">
        <b-card-title>Cadastro Serviço </b-card-title>
        <div>
          <b-row>
            <b-col cols="10">
              <b-input v-model="filter" placeholder="Pesquisar.."></b-input>
            </b-col>
            <b-col cols="*">
              <b-button
                title="Novo Cadastro"
                variant="primary"
                class="mb-2"
                @click="novoCadastro()"
              >
                <b-icon-plus-circle-fill></b-icon-plus-circle-fill>
              </b-button>
            </b-col>
          </b-row>

          <hr />
          <b-table
            sticky-header
            striped
            hover
            :filter="filter"
            :items="items"
            :fields="fields"
          >
            <template v-slot:cell(checkbox)="data">
              <b-form-checkbox
                v-show="1 != 1"
                id="checkbox-1"
                v-model="data.item.ser_codigo"
                name="checkbox-1"
                value="data.item.ser_codigo"
                unchecked-value="not_accepted"
              >
              </b-form-checkbox>
            </template>
            <template v-slot:cell(ser_externo)="data">
              {{ data.item.ser_externo == 1 ? "Sim" : "Não" }}
            </template>
            <template v-slot:cell(actions)="data">
              <b-button
                size="sm"
                variant="info"
                @click="oServico = data.item"
                v-b-modal.modal-1
                ><b-icon icon="pencil-square" aria-hidden="true"></b-icon>
              </b-button>
              <b-button
                size="sm"
                variant="danger"
                @click="confirmaExcluirServico(data.item.ser_codigo)"
                ><b-icon icon="trash-fill" aria-hidden="true"></b-icon
              ></b-button>
              <b-button
                size="sm"
                variant="primary"
                @click="gerarPDF(data.item)"
              >
                <b-icon icon="file-earmark" aria-hidden="true"></b-icon>
              </b-button>
            </template>
          </b-table>
        </div>
      </b-card-body>

      <ModalForm :titulo="'Cadastro de Serviço'">
        <b-form v-on:submit.prevent="onSubmit" @reset="onReset">
          <b-row>
            <b-col cols="12" sm="12">
              <label for="modal_form_input_cli_descricao">Cliente:</label>
              <v-select
                id="modal_form_input_cli_descricao"
                label="cli_descricao"
                :options="oCliente"
                :required="true"
                v-model="oServico.cli_codigo"
                :reduce="(oCliente) => oCliente.cli_codigo"
            /></b-col>
          </b-row>
          <b-row>
            <b-col cols="4" sm="6">
              <label for="modal_form_input_tps_descricao">Tipo Serviço:</label>
              <v-select
                id="modal_form_input_tps_descricao"
                label="tps_descricao"
                :options="oTipoServico"
                :required="true"
                v-model="oServico.tps_codigo"
                :reduce="(oTipoServico) => oTipoServico.tps_codigo"
            /></b-col>
            <b-col cols="4" sm="6">
              <label for="modal_form_input_tpprod_descricao"
                >Tipo Produto:</label
              >
              <v-select
                id="modal_form_input_tpprod_descricao"
                label="tpprod_descricao"
                :options="oTipoProduto"
                :required="true"
                v-model="oServico.tpprod_codigo"
                :reduce="(oTipoProduto) => oTipoProduto.tpprod_codigo"
            /></b-col>
          </b-row>
          <b-row>
            <b-col cols="4" sm="4"
              ><b-form-group
                id="modal_form_label_ser_marca"
                label="Marca:"
                label-for="modal_form_input_ser_marca"
              >
                <b-form-input
                  id="modal_form_input_ser_marca"
                  v-model="oServico.ser_marca"
                  placeholder="Digite o marca"
                ></b-form-input> </b-form-group
            ></b-col>
            <b-col cols="4" sm="4"
              ><b-form-group
                id="modal_form_label_ser_modelo"
                label="Modelo:"
                label-for="modal_form_input_ser_modelo"
              >
                <b-form-input
                  id="modal_form_input_ser_modelo"
                  v-model="oServico.ser_modelo"
                  placeholder="Digite o modelo"
                ></b-form-input> </b-form-group
            ></b-col>
            <b-col cols="4" sm="4"
              ><b-form-group
                id="modal_form_label_ser_numeroserie"
                label="Número de série:"
                label-for="modal_form_input_ser_numeroserie"
              >
                <b-form-input
                  id="modal_form_input_ser_numeroserie"
                  v-model="oServico.ser_numeroserie"
                  placeholder="Digite o número de série:"
                ></b-form-input> </b-form-group
            ></b-col>
          </b-row>

          <b-row>
            <b-col cols="4" sm="4">
              <label for="modal_form_input_ser_dataentrada"
                >Data de entrada:</label
              >
              <b-form-datepicker
                v-model="oServico.ser_dataentrada"
                locale="pt-BR"
                :date-format-options="{
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                }"
                aria-controls="modal_form_input_ser_dataentrada"
              ></b-form-datepicker>
            </b-col>
            <b-col cols="5" sm="4">
              <label for="modal_form_input_ser_datasaida">Data de saída:</label>

              <b-form-datepicker
                v-model="oServico.ser_datasaida"
                locale="pt-BR"
                :date-format-options="{
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                }"
                aria-controls="modal_form_input_ser_datasaida"
              ></b-form-datepicker>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4" sm="4">
              <label for="modal_form_input_tpp_descricao"
                >Tipo de Pagamento:</label
              >
              <v-select
                id="modal_form_input_tpp_descricao"
                label="tpp_descricao"
                :options="oTipoPagamento"
                :required="true"
                v-model="oServico.tpp_codigo"
                :reduce="(oTipoPagamento) => oTipoPagamento.tpp_codigo"
            /></b-col>
            <b-col cols="3" sm="3"
              ><b-form-group
                id="modal_form_label_ser_valorpagamento"
                label="Valor (R$):"
                label-for="modal_form_input_ser_valorpagamento"
              >
                <b-form-input
                  id="modal_form_input_ser_valor"
                  v-model="oServico.ser_valorpagamento"
                  placeholder="Digite o valor"
                ></b-form-input> </b-form-group
            ></b-col>
            <b-col cols="4" sm="4">
              <label for="modal_form_input_ser_datapagamento"
                >Data de pagamento:</label
              >

              <b-form-datepicker
                v-model="oServico.ser_datapagamento"
                right
                locale="pt-BR"
                :date-format-options="{
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                }"
                aria-controls="modal_form_input_ser_datapagamento"
              ></b-form-datepicker>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" sm="12">
              <label for="modal_form_label_ser_observacao">Observação:</label>
              <b-form-textarea
                id="modal_form_label_ser_observacao"
                v-model="oServico.ser_observacao"
              ></b-form-textarea>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-form-group id="modal_form_label_ser_externo">
                <b-form-group
                  label="Serviço externo?"
                  v-slot="{ ariaDescribedby }"
                >
                  <b-form-radio
                    v-model="oServico.ser_externo"
                    :aria-describedby="ariaDescribedby"
                    name="ser_externo"
                    value="1"
                    >Sim</b-form-radio
                  >
                  <b-form-radio
                    v-model="oServico.ser_externo"
                    :aria-describedby="ariaDescribedby"
                    name="ser_externo"
                    value="0"
                    >Não</b-form-radio
                  >
                </b-form-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-button type="submit" variant="primary">Salvar</b-button>
          <b-button type="reset" variant="danger">Limpar dados</b-button>
        </b-form>
      </ModalForm>
      <div v-show="oServico.exibe">
        <PDF ref="PDF" :dados="oServico" />
      </div>
      <b-card-footer footer-tag="footer"> </b-card-footer>
    </b-card>
  </div>
</template>
<script>
import ModalForm from "../components/ModalForm.vue";
import PDF from "../components/PDF.vue";
import html2pdf from "html2pdf.js";
export default {
  data: () => ({
    filter: "",
    oCliente: [{}],
    oTipoPagamento: [{}],
    oTipoServico: [{}],
    oTipoProduto: [{}],
    oServico: {
      ser_codigo: null,
      cli_codigo: null,
      tps_codigo: null,
      tpp_codigo: null,
      ser_marca: null,
      ser_numeroserie: null,
      ser_modelo: null,
      ser_dataentrada: null,
      ser_datasaida: null,
      ser_datapagamento: null,
      ser_valorpagamento: null,
      ser_externo: null,
      ser_observacao: null,
      tpprod_codigo: null,
    },
    fields: [
      {
        key: "checkbox",
        label: "#",
      },
      {
        label: "Descriçao",
        thStyle: { width: "30%" },
        thClass: "",
        key: "ser_observacao",
        sortable: true,
      },
      {
        label: "Produto",

        key: "tpprod_descricao",
        sortable: true,
      },
      {
        label: "Serviço",
        key: "tps_descricao",
        sortable: true,
      },
      {
        label: "Pagamento",
        key: "tpp_descricao",
        sortable: true,
      },
      {
        label: "Cliente",
        key: "cli_descricao",
        sortable: true,
      },
      {
        label: "Externo",
        key: "ser_externo",
        sortable: false,
      },
      {
        key: "actions",
        label: "Ações",
      },
    ],
    items: [
      {
        cli_codigo: null,
        tpprod_descricao: null,
        tps_descricao: null,
        tpp_descricao: null,
        ser_observacao: null,
        cli_descricao: null,
        cli_endereco: null,
        cli_pj: null,
      },
    ],
  }),
  components: { ModalForm, PDF },
  beforeMount() {
    this.listarTabela();
    this.listarClientes();
    this.listarTipoPagamento();
    this.listarTipoServico();
    this.listarTipoProduto();
  },
  methods: {
    resetServico() {
      this.oServico = {
        ser_codigo: null,
        cli_codigo: null,
        tps_codigo: null,
        tpp_codigo: null,
        ser_marca: null,
        ser_numeroserie: null,
        ser_modelo: null,
        ser_dataentrada: null,
        ser_datasaida: null,
        ser_datapagamento: null,
        ser_valorpagamento: null,
        ser_externo: null,
        ser_observacao: null,
        tpprod_codigo: null,
      };
    },
    confirmaExcluirServico(ser_codigo) {
      this.boxTwo = false;
      this.$bvModal
        .msgBoxConfirm("Tem certeza que deseja apagar?", {
          title: "Atenção!",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "Sim",
          cancelTitle: "Não",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if (value == true) {
            this.oServico = { ser_codigo: ser_codigo };
            this.excluirServico();
            this.listarTabela();
          }
        })
        .catch((err) => {
          alert(err);
          this.boxTwo = false;
          // An error occurred
        });
    },
    gerarPDF(oServico) {
      this.oServico = oServico;
      let opt = {
        margin: 1,
        filename: "ordem_de_servico.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf(this.$refs.PDF.$el, opt);
    },
    //Reservado Sistema
    onSubmit(data) {
      var data2 = data;
      if (data2) {
        data = data2;
      }
      if (
        this.oServico.cli_codigo == null ||
        this.oServico.tps_codigo == null ||
        this.oServico.tpprod_codigo == null ||
        this.oServico.tpp_codigo == null
      ) {
        alert("Preencha os campos: Cliente, Serviço, Produto e Pagamento!");
        return;
      }
      let servico = this.oServico;
      this.axios.post("Servico/salvarServico", servico).then((response) => {
        console.log(response.data);

        this.$bvToast.toast(`Registro salvo com sucesso!`, {
          title: "Atenção",
          variant: "success",
          solid: true,
          autoHideDelay: 1500,
          appendToast: true,
        });
        this.listarTabela();
        this.$bvModal.hide("modal-1");
        //this.items = response.data;
      });
      return false;
    },
    onReset() {},
    novoCadastro() {
      this.resetServico();

      this.listarTabela();
      this.listarClientes();
      this.listarTipoPagamento();
      this.listarTipoServico();
      this.listarTipoProduto();
      this.$bvModal.show("modal-1");
    },
    //AJAX
    async listarTabela() {
      this.axios.get("Servico/listarTabela").then((response) => {
        this.items = response.data;
      });
    },
    async excluirServico() {
      let servico = this.oServico;
      this.axios.post("Servico/excluirServico", servico).then(() => {
        this.listarTabela();
      });
    },
    async listarClientes() {
      this.axios.get("Cliente/listarTabela").then((response) => {
        this.oCliente = response.data;
      });
    },
    async listarTipoPagamento() {
      this.axios.get("TipoPagamento/listarTabela").then((response) => {
        this.oTipoPagamento = response.data;
      });
    },
    async listarTipoServico() {
      this.axios.get("TipoServico/listarTabela").then((response) => {
        this.oTipoServico = response.data;
      });
    },
    async listarTipoProduto() {
      this.axios.get("TipoProduto/listarTabela").then((response) => {
        this.oTipoProduto = response.data;
      });
    },
  },
};
</script>