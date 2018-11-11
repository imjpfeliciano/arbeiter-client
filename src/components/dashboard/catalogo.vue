<template>
  <div class="row">
    <div class="col s12">
      <ul class="tabs">
        <li class="tab col s6"><a class="active" href="/dashboard/catalogo">Catalogo</a></li>
        <li class="tab col s6"><a href="/dashboard/historial">Historial</a></li>
      </ul>
    </div>
    <div class="col s12">
      <catalogo-component />
    </div>
  </div>
</template>

<script>
import CatalogoComponent from '../catalogo/catalogo.vue';

export default {
  components: {
    CatalogoComponent,
  }  
}
</script>
