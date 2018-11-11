<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Navbar from './components/navbar/navbar.vue';
import FooterComponent from './components/footer/footer.vue';
import Dashboard from './components/dashboard/dashboard.vue';
import Catalogo from './components/catalogo/catalogo.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    FooterComponent,
    Dashboard,
    Catalogo,
  }
}
</script>

