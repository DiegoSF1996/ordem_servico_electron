<template>
  <div>
    <b-row>
      <b-col cols="10">
        <b-input v-model="filter" placeholder="Pesquisar.."></b-input>
      </b-col>
      <b-col cols="*">
        <b-button
          :title="titulo"
          variant="primary"
          class="mb-2"
          @click="this.$parent.novoCadastro"
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
      :items="this.$parent.items"
      :fields="this.$parent.fields"
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
</template>
<script>
export default {
  name: "DataTable",
  data: () => ({
    filter: null,
  }),
  props: { titulo: String },
};
</script>