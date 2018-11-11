import Vue from 'vue';
import Router from 'vue-router';

import Registro from './components/registro/registro.vue';
import Login from './components/login/login.vue';
import Dashboard from './components/dashboard/dashboard.vue';
import Filter from './components/filter/filter.vue';
import Contact from './components/contact/contact.vue';

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
      name: 'register',
      path: '/register',
      component: Registro,
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard,
    },
    {
      name: 'contact',
      path: '/contact/:id',
      component: Contact,
    },
    {
      name: 'filter_mecanico',
      path: '/filter/mecanico',
      component: Filter,
    },
    {
      name: 'filter_electricista',
      path: '/filter/electricista',
      component: Filter,
    },
    {
      name: 'filter_plomeria',
      path: 'filter/plomeria',
      component: Filter,
    },
    {
      name: 'filter_construccion',
      path: '/filter/construccion',
      component: Filter,
    },
  ]
})