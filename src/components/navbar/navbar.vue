<template>
  <nav>
    <div class="nav-wrapper indigo">
      <a href="/" class="brand-logo">
        <img :src="baseLogo">
        <span class="brand-name">Arbeiter</span>
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/">Login</a></li>
        <li><a href="/registro">Registrarme</a></li>
        <li><a href="/dashboard/catalogo">Catalogo</a></li>
        <li><a href="/filter/mecanico">Búsqueda</a></li>
        <li><a href="/contact/53">Chat</a></li>
      </ul>
    </div>
  </nav>
        
</template>
<script>
import Logo from '../../assets/arbeiter-logo.png';

export default {
  data() {
    return {
      baseLogo: Logo,
    }
  }  
}
</script>

<style scoped>
img {
  height: 65px !important;
  width: auto;
  opacity: 0.9;
}

.brand-name {
  margin-left: 20px;
  position: fixed;
}
</style>

