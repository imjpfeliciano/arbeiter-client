import Vue from 'vue';
import Router from 'vue-router';

import Registro from './components/registro/registro.vue';
import Login from './components/login/login.vue';
import Catalogo from './components/dashboard/catalogo.vue';
import Historial from './components/dashboard/historial.vue';
import Filter from './components/filter/filter.vue';
import ChatView from './components/chatview/chatview.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'login',
      path: '/',
      component: Login,
    },
    {
      name: 'registro',
      path: '/registro',
      component: Registro,
    },
    {
      name: 'catalogo',
      path: '/dashboard/catalogo',
      component: Catalogo,
    },
    {
      name: 'historial',
      path: '/dashboard/historial',
      component: Historial,
    },
    {
      name: 'contact',
      path: '/contact/:id',
      component: ChatView,
    },
    {
      name: 'filter_mecanico',
      path: '/filter/mecanico',
      component: Filter,
    },
  ]
})