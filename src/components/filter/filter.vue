<template>
	<div class="container">
		<div class="row grey lighten-3">
			<ul>
				<li v-for="(contactItem, index) in contacts" :key="index">
					<contact-card
						id="contactItem.id"
						nombre="contactItem.nombre"
						profile_pic="contactItem.profile_pic"
						servicio="contactItem.servicio"
						rating="contactItem.rating"
						direccion="contactItem.direccion"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

import ContactCard from './../contact/contact.vue';

export default {
	data() {
		return {
			contacts: [
				{ id: 1, nombre: 'a', profile_pic: 'a', servicio: 'b', rating: 1, direccion: 'z'},
				{ id: 2, nombre: 'b', profile_pic: 'a', servicio: 'b', rating: 1, direccion: 'z'},
				{ id: 3, nombre: 'c', profile_pic: 'a', servicio: 'b', rating: 1, direccion: 'z'},
				{ id: 4, nombre: 'd', profile_pic: 'a', servicio: 'b', rating: 1, direccion: 'z'},
				{ id: 5, nombre: 'e', profile_pic: 'a', servicio: 'b', rating: 1, direccion: 'z'},
			],
		};
	},
	components: {
		ContactCard,
	}
	
}
</script>

<style scoped>
button {
	background-color: #ffff8d;
}
</style>


