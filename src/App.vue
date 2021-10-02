<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="#">Início</b-nav-item>
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Serviço" left>
            <b-dropdown-item to="/Servico" href="#">Serviços</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Administrativo" left>
            <b-dropdown-item to="/Cliente" href="#">Cliente</b-dropdown-item>
            <b-dropdown-item to="/TipoPagamento" href="#"
              >Tipos de Pagamento</b-dropdown-item
            >
            <b-dropdown-item to="/TipoServico" href="#"
              >Tipos de Serviço</b-dropdown-item
            >
            <b-dropdown-item to="/TipoProduto" href="#"
              >Tipos de Produto</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <loader v-show="loading" object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" disableScrolling="false" name="dots">
    </loader>
    <router-view />
  </div>
</template>
<script>
export default {
  data: () => ({ loading: false }),

  beforeMount() {
  },
  methods: {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* Configurando scroll */

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #2c3e50;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
