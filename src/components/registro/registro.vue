<template>
  <div class="d-flex justify-content-center grey lighten-5">
    <div class="container">
      <div class="row">
    <div class="card col s12">
      <h1>Registro</h1>
      <div class="row">
        <div class="input-field col s12 m12">
          <input id="first_name" type="text" class="validate">
          <label for="first_name">Nombre Completo</label>
        </div>
        
      </div>
      
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12 m12">
          <input id="address" type="text" class="validate">
          <label for="address">Direccion</label>
        </div>
        
      </div>

      <div class="row">
        <div class="input-field col s12">
          <a href="/dashboard" class="waves-effect waves-light btn orange accent-4">Registrar</a>
        </div>
      </div>
      
    </div>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .d-flex{
    display: flex;
    justify-content: center;
  }
  .row{
    margin-bottom: 0;
  }
</style>