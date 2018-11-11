<template>
  <div id="app">
    <navbar></navbar>
    <main class="container app-body">
      <router-view></router-view>
    </main>
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

<style>
#app {
  background-color: #fafafa;
}

.app-body {
  display: flex;
  min-height: 60vh;
  flex-direction: column;
  margin-top: 20px !important;
}

main {
  flex: 1 0 auto;
}
</style>

