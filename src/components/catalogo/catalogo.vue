<template>
  <div>    
    <!-- search form -->
    <div class="row">
      <div class="input-field col s12">
        <i class="material-icons prefix">search</i>
        <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
        <label for="icon_prefix2">Búsqueda</label>
      </div>
    </div>
    
    <!-- filter list -->
    <div class="row">
      <div class="col s12 m3" v-for="(item, index) in catalogos" :key="index">
        <div class="card">
          <div class="card-image">
            <img :src="item.imageURL">
            <span class="card-title">
              <a :href="`/filter/${item.id}`">
                {{item.title}}
              </a>
            </span>
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
        {
          title: 'Mecánico',
          id: 'mecanico',
          imageURL: 'https://picsum.photos/350/250',
        },
        {
          title: 'Carpintero',
          id: 'carpintero',
          imageURL: 'https://picsum.photos/350/250',
        },
        {
          title: 'Cerrajero',
          id: 'cerrajero',
          imageURL: 'https://picsum.photos/350/250',
        },
        {
          title: 'Electricista',
          id: 'electricista',
          imageURL: 'https://picsum.photos/350/250',
        },
        {
          title: 'Albañilería',
          id: 'albanileria',
          imageURL: 'https://picsum.photos/350/250',
        },
        {
          title: 'Fontanero',
          id: 'fontanero',
          imageURL: 'https://picsum.photos/350/250',
        },
        {
          title: 'Cerrajero',
          id: 'cerrajero',
          imageURL: 'https://picsum.photos/350/250',
        },
        {
          title: 'Pintor',
          id: 'pintor',
          imageURL: 'https://picsum.photos/350/250',
        },
      ]
    };
  }
};
</script>

<style scoped>
.card-title a {
  color: white;
}
</style>