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

export default {
  name: 'app',
  components: {
    Navbar,
    FooterComponent,
  }
}
</script>

