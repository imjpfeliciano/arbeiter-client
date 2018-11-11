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
          imageURL: 'https://www.smartfolio.site/wp-content/uploads/2018/11/Mecanico.jpg',
        },
        {
          title: 'Carpintero',
          id: 'carpintero',
          imageURL: 'https://www.smartfolio.site/wp-content/uploads/2018/11/carpintero-350x250.jpg',
        },
        {
          title: 'Cerrajero',
          id: 'cerrajero',
          imageURL: 'https://www.smartfolio.site/wp-content/uploads/2018/11/cerrajero.jpeg',
        },
        {
          title: 'Electricista',
          id: 'electricista',
          imageURL: 'https://www.smartfolio.site/wp-content/uploads/2018/11/electricista.jpeg',
        },
        {
          title: 'Albañilería',
          id: 'albanileria',
          imageURL: 'https://www.smartfolio.site/wp-content/uploads/2018/11/albañil.jpeg',
        },
        {
          title: 'Construccion',
          id: 'fontanero',
          imageURL: 'https://www.smartfolio.site/wp-content/uploads/2018/11/construccion.jpeg',
        },
        {
          title: 'Cerrajero',
          id: 'cerrajero',
          imageURL: 'https://www.smartfolio.site/wp-content/uploads/2018/11/cerrajero.jpeg',
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
.card .card-image img{
  height: 126px;
}
.card .card-image .card-title{
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>