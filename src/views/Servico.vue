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
                v-model="data.item.cli_codigo"
                name="checkbox-1"
                value="data.item.cli_codigo"
                unchecked-value="not_accepted"
              >
              </b-form-checkbox>
            </template>
            <template v-slot:cell(cli_pj)="data">
              {{ data.item.cli_pj == "true" ? "Sim" : "Não" }}
            </template>
            <template v-slot:cell(actions)="data">
              <b-button
                size="sm"
                class="mr-2"
                variant="info"
                @click="oCliente = data.item"
                v-b-modal.modal-1
                >Editar
                <!-- @click="alterarCliente(data.item.cli_codigo)" -->
              </b-button>
              <b-button
                size="sm"
                variant="danger"
                @click="confirmaExcluirCliente(data.item.cli_codigo)"
                >Excluir</b-button
              >
            </template>
          </b-table>
        </div>
      </b-card-body>

      <ModalForm :titulo="'Cadastro de Cliente'">
        <b-form v-on:submit.prevent="onSubmit" @reset="onReset">
          <b-form-group
            id="modal_form_label_cli_descricao"
            label="Nome do Cliente:"
            label-for="modal_form_input_cli_descricao"
          >
            <b-form-input
              id="modal_form_input_cli_descricao"
              v-model="oCliente.cli_descricao"
              placeholder="Digite o nome"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="modal_form_label_cli_email"
            label="E-mail:"
            label-for="modal_form_input_cli_email"
            description=""
          >
            <b-form-input
              id="modal_form_input_cli_email"
              v-model="oCliente.cli_email"
              type="email"
              placeholder="E-mail"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="modal_form_label_cli_telefone"
            label="Telefone do Cliente:"
            label-for="modal_form_input_cli_telefone"
          >
            <b-form-input
              id="modal_form_input_cli_telefone"
              v-model="oCliente.cli_telefone"
              placeholder="Digite o telefone"
              required
            ></b-form-input>
          </b-form-group>

          <!-- CEP -->
          <b-form-group
            id="modal_form_label_cli_cep"
            label="CEP do Cliente:"
            label-for="modal_form_input_cli_cep"
          >
            <b-form-input
              id="modal_form_input_cli_cep"
              v-model="oCliente.cli_cep"
              placeholder="Digite o CEP"
              required
            ></b-form-input>
          </b-form-group>
          <!-- Endereço -->
          <b-form-group
            id="modal_form_label_cli_endereco"
            label="Endereço do Cliente:"
            label-for="modal_form_input_cli_endereco"
          >
            <b-form-input
              id="modal_form_input_cli_endereco"
              v-model="oCliente.cli_endereco"
              placeholder="Digite o endereço"
              required
            ></b-form-input>
          </b-form-group>
          <!-- Bairro -->
          <b-form-group
            id="modal_form_label_cli_bairro"
            label="Bairro do Cliente:"
            label-for="modal_form_input_cli_bairro"
          >
            <b-form-input
              id="modal_form_input_cli_bairro"
              v-model="oCliente.cli_bairro"
              placeholder="Digite o bairro"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="modal_form_label_cli_pj">
            <b-form-group label="Cliente é PJ?" v-slot="{ ariaDescribedby }">
              <b-form-radio
                v-model="oCliente.cli_pj"
                :aria-describedby="ariaDescribedby"
                name="cli_pj"
                value="true"
                >Sim</b-form-radio
              >
              <b-form-radio
                v-model="oCliente.cli_pj"
                :aria-describedby="ariaDescribedby"
                name="cli_pj"
                value="false"
                >Não</b-form-radio
              >
            </b-form-group>
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
    oCliente: {
      cli_codigo: null,
      cli_descricao: null,
      cli_endereco: null,
      cli_cep: null,
      cli_bairro: null,
      cli_telefone: null,
      cli_email: null,
      cli_pj: null,
    },
    fields: [
      {
        key: "checkbox",
        label: "#",
      },
      {
        label: "Descriçao",
        key: "cli_descricao",
        sortable: true,
      },
      {
        label: "Telefone",
        key: "cli_telefone",
        sortable: false,
      },
      {
        label: "E-mail",
        key: "cli_email",
        sortable: false,
      },
      {
        label: "Endereço",
        key: "cli_endereco",
        sortable: false,
      },
      {
        label: "PJ",
        key: "cli_pj",
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
        cli_descricao: null,
        cli_endereco: null,
        cli_cep: null,
        cli_bairro: null,
        cli_telefone: null,
        cli_email: null,
        cli_pj: null,
      },
    ],
  }),
  components: { ModalForm },
  beforeMount() {
    this.listarTabela();
  },
  methods: {
    resetCliente() {
      this.oCliente = {
        cli_codigo: null,
        cli_descricao: null,
        cli_endereco: null,
        cli_cep: null,
        cli_bairro: null,
        cli_telefone: null,
        cli_email: null,
        cli_pj: null,
      };
    },
    confirmaExcluirCliente(cli_codigo) {
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
            this.oCliente = { cli_codigo: cli_codigo };
            this.excluirCliente();
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
      let cliente = this.oCliente;
      this.axios.post("cliente/salvarCliente", cliente).then((response) => {
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
      this.resetCliente();

      this.$bvModal.show("modal-1");
    },
    //AJAX
    async listarTabela() {
      this.axios.get("cliente/listarTabela").then((response) => {
        this.items = response.data;
      });
    },
    async excluirCliente() {
      let cliente = this.oCliente;
      this.axios.post("cliente/excluirCliente", cliente).then(() => {});
    },
  },
};
</script>