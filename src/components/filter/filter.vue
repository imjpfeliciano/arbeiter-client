<template>	
	<div>
		<h4>Arbeiters recomendados</h4>
		<ul class="collection">
			<contact-card
				v-for="(contactItem, index) in recomendados"
				:key="index"

				:id="contactItem.id"
				:nombre="contactItem.nombre"
				:imageURL="contactItem.imageURL"
				:servicio="contactItem.servicio"
				:rating="contactItem.rating"
				:direccion="contactItem.direccion"
			/>
		</ul>
		
		<h4>Resultados de la búsqueda</h4>
		<ul class="collection">
			<contact-card
				v-for="(contactItem, index) in contacts"
				:key="index"

				:id="contactItem.id"
				:nombre="contactItem.nombre"
				:imageURL="contactItem.imageURL"
				:servicio="contactItem.servicio"
				:rating="contactItem.rating"
				:direccion="contactItem.direccion"
			/>
		</ul>
	</div>
</template>

<script>

import ContactCard from './../contact/contact.vue';

export default {
	data() {
		return {
			contacts: [
				{ id: 53, nombre: 'Kyleigh Pham', imageURL: 'https://randomuser.me/api/portraits/men/53.jpg', servicio: 'Mecánico General', rating: 1, direccion: '34 Edgemont St. Stillwater, MN 55082'},
				{ id: 54, nombre: 'Gabrielle Richmond', imageURL: 'https://randomuser.me/api/portraits/men/54.jpg', servicio: 'Mecánico Automotriz', rating: 1, direccion: '68 W. Rockwell Court Honolulu, HI 96815'},
				{ id: 55, nombre: 'Todd Martin', imageURL: 'https://randomuser.me/api/portraits/men/55.jpg', servicio: 'Mecánico en Suspensión', rating: 1, direccion: '3 Big Rock Cove Street Chesapeake, VA 23320'},
				{ id: 56, nombre: 'Gerardo Black', imageURL: 'https://randomuser.me/api/portraits/men/56.jpg', servicio: 'Mecánico General', rating: 1, direccion: '80 Iroquois Street Upland, CA 91784'},
				{ id: 57, nombre: 'Sarai Moon', imageURL: 'https://randomuser.me/api/portraits/women/57.jpg', servicio: 'Mecánico General', rating: 1, direccion: '844 W. Mayflower Street Green Bay, WI 54302'},
			],
			recomendados: [
				{ id: 58, nombre: 'Morgan Novak', imageURL: 'https://randomuser.me/api/portraits/men/58.jpg', servicio: 'Mecánico General', rating: 1, direccion: '25 Young St. Clayton, NC 27520'},
				{ id: 59, nombre: 'Dalton Maxwell', imageURL: 'https://randomuser.me/api/portraits/men/59.jpg', servicio: 'Mecánico Automotriz', rating: 1, direccion: '9023 North Birchwood Street Ashburn, VA 20147'},
			]
		};
	},
	components: {
		ContactCard,
	}
	
}
</script>

<style scoped>
</style>


