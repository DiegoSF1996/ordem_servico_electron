import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
Vue.component('v-select', vSelect)

const moment = require('moment')
require('moment/locale/es')
 
Vue.use(require('vue-moment'), {
    moment
})

console.log(Vue.moment().locale()) 


import loader from "vue-ui-preloader";

Vue.use(loader);


Vue.config.productionTip = false

new Vue({
  router,
  components:{
    loader:loader
    },
  render: h => h(App)
}).$mount('#app')
