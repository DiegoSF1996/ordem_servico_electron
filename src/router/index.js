import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Cliente from '../views/Cliente.vue'
import TipoProduto from '../views/TipoProduto.vue'
import TipoPagamento from '../views/TipoPagamento.vue'
import TipoServico from '../views/TipoServico.vue'
import Servico from '../views/Servico.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Cliente',
    name: 'Cliente',
    component: Cliente
  },
  {
    path: '/TipoProduto',
    name: 'TipoProduto',
    component: TipoProduto
  },
  {
    path: '/TipoPagamento',
    name: 'TipoPagamento',
    component: TipoPagamento
  },
  {
    path: '/TipoServico',
    name: 'TipoServico',
    component: TipoServico
  },
  {
    path: '/Servico',
    name: 'Servico',
    component: Servico
  },
  // {
  //   path: '/Cliente',
  //   name: 'Cliente',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
