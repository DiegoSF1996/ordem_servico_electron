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
        <b-card-title>Cadastro tipo pagamento </b-card-title>
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
                v-model="data.item.tpp_codigo"
                name="checkbox-1"
                value="data.item.tpp_codigo"
                unchecked-value="not_accepted"
              >
              </b-form-checkbox>
            </template>
            <template v-slot:cell(actions)="data">
              <b-button
                size="sm"
                class="mr-2"
                variant="info"
                @click="oTipoPagamento = data.item"
                v-b-modal.modal-1
                >Editar
                <!-- @click="alterarTipoPagamento(data.item.tpp_codigo)" -->
              </b-button>
              <b-button
                size="sm"
                variant="danger"
                @click="confirmaExcluirTipoPagamento(data.item.tpp_codigo)"
                >Excluir</b-button
              >
            </template>
          </b-table>
        </div>
      </b-card-body>

      <ModalForm :titulo="'Cadastro de Tipo de Pagamento'">
        <b-form v-on:submit.prevent="onSubmit" @reset="onReset">
          <b-form-group
            id="modal_form_label_tpp_descricao"
            label="Nome do Tipo de  Pagamento:"
            label-for="modal_form_input_tpp_descricao"
          >
            <b-form-input
              id="modal_form_input_tpp_descricao"
              v-model="oTipoPagamento.tpp_descricao"
              placeholder="Digite o nome"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Salvar</b-button>
          <b-button type="reset" variant="danger">Limpar dados</b-button>
        </b-form>
      </ModalForm>
      <b-card-footer footer-tag="footer"> </b-card-footer>
    </b-card>
  </div>
</template>
<script>
import ModalForm from "../components/ModalForm.vue";

export default {
  data: () => ({
    filter: "",
    oTipoPagamento: {
      tpp_codigo: null,
      tpp_descricao: null,
    },
    fields: [
      {
        key: "checkbox",
        label: "#",
      },
      {
        label: "Descriçao",
        key: "tpp_descricao",
        sortable: true,
      },
      {
        key: "actions",
        label: "Ações",
      },
    ],
    items: [
      {
        tpp_codigo: null,
        tpp_descricao: null,
      },
    ],
  }),
  components: { ModalForm },
  beforeMount() {
    this.listarTabela();
  },
  methods: {
    resetTipoPagamento() {
      this.oTipoPagamento = {
        tpp_codigo: null,
        tpp_descricao: null,
      };
    },
    confirmaExcluirTipoPagamento(tpp_codigo) {
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
            this.oTipoPagamento = { tpp_codigo: tpp_codigo };
            this.excluirTipoPagamento();
            this.listarTabela();
          }
        })
        .catch((err) => {
          alert(err);
          this.boxTwo = false;
          // An error occurred
        });
    },
    //Reservado Sistema
    onSubmit(data) {
      var data2 = data;
      if (data2) {
        data = data2;
      }
      let TipoPagamento = this.oTipoPagamento;
      this.axios
        .post("TipoPagamento/salvarTipoPagamento", TipoPagamento)
        .then((response) => {
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
        })
        .catch((response) => {
          console.log(response.data);

          this.$bvToast.toast(`Registro não salvo, tente novamente!`, {
            title: "Atenção",
            variant: "warning",
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
      this.resetTipoPagamento();

      this.$bvModal.show("modal-1");
    },
    //AJAX
    async listarTabela() {
      this.axios.get("TipoPagamento/listarTabela").then((response) => {
        this.items = response.data;
      });
    },
    async excluirTipoPagamento() {
      let TipoPagamento = this.oTipoPagamento;
      this.axios
        .post("TipoPagamento/excluirTipoPagamento", TipoPagamento)
        .then(() => {
          this.listarTabela();
        });
    },
  },
};
</script>