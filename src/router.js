import Vue from 'vue';
import Router from 'vue-router';

import Registro from './components/registro/registro.vue';
import Login from './components/login/login.vue';
import Dashboard from './components/dashboard/dashboard.vue';
import Catalogo from './components/catalogo/catalogo.vue';

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
      path: '/register',
      component: Registro,
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard,
    },
    {
      name: 'catalogo',
      path: '/catalogo',
      component: Catalogo,
    },
  ]
})