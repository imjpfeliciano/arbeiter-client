<template>
	<li class="collection-item avatar">
		<img :src="imageURL" alt="" class="circle">
		<span class="title">{{ nombre }}</span>
		<p>{{ servicio }} <br>
				{{ direccion }}
		</p>
		<a class="secondary-content">
			<i class="material-icons">star</i>
			<i class="material-icons">star</i>
			<i class="material-icons">star</i>
			<i class="material-icons">star_half</i>
			<i class="material-icons">star_border</i>
		</a>
		<a class="waves-effect waves-light btn orange accent-2" :href="`/contact/${id}`"><i class="material-icons left">comment</i>Contactar</a>
	</li>
</template>

<script>

export default
{
	props: {
		nombre:			{
			type: String,
			required: true,
		},
		imageURL:	{
			type: String,
			required: true,
		},
		servicio: 		{
			type: String,
			required: true,
		},
		rating: 		{
			type: Number,
			required: true,
		},
		direccion: 		{
			type: String,
			required: true,
		},
		id: {
			type: Number,
			required: true,
		}
	},
}
</script>

<style scoped>
.secondary-content {
	color: #ffab40;
}
</style>


