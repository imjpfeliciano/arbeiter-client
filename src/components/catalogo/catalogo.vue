<template>
  <div class="grey lighten-5">
    <div class="container">
        
        <input type="text" placeholder="buscar"/>
        <button class="btn orange accent-4">Buscar</button>
        <h1>Catalogo</h1>
        <div class="row">
            <div class="col s12 m6" v-for="(item, index) in catalogos" :key="index">
                <div class="card">
                    <a :href="item.url"><h5>{{item.tipo}}</h5></a>
                </div>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
            catalogos: [
                { tipo: 'Mecanico',url:'filter/mecanico' },
                { tipo: 'Electricista',url:'filter/electricista' },
                { tipo: 'Plomeria',url:'filter/plomeria' },
                { tipo: 'Construccion',url:'filter/construccion' },
            ],
      }
  }
}
</script>

<style scoped>
  
</style>