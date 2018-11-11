<template>
	<div class="container">
		test
		<div class="row grey lighten-3">
			<div class="col s12">
				<div class="row">
					<div class ="col s2">
					</div>
					<a>Nombre: </a>
					<a> </a>
				</div>
			</div>
			<div class="col s12">
				<div class="row">
					<div class ="col s2">
					</div>
					<a>Foto de Perfil: </a>
					<a> </a>
				</div>
			</div>
			<div class="col s12">
				<div class="row">
					<div class ="col s2">
					</div>
					<a>Servicio: </a>
					<a> </a>
				</div>
			</div>
			<div class="col s12">
				<div class="row">
					<div class ="col s2">
					</div>
					<a>Rating: </a>
					<a> </a>
				</div>
			</div>
			<div class="col s12">
				<div class="row">
					<div class ="col s2">
					</div>
					<a>Direccion: </a>
					<a> </a>
				</div>
			</div>
			<div class="col s12">
				<div class="row">
					<div class ="col s2">
					</div>
					<div class="input-field col s12">						
						<a href="contactId" class="waves-effect waves-light btn orange accent-4">Contacto</a> 
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default
{
	props: {
		nombre:			{
			type: String,
			required: true,
		},
		profile_pic:	{
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
	// computed: {
	// 	contactId() 
	// 	{
	// 		return this.$route.params.id;
	// 	},
	// 	getArbeiters()
	// 	{
	// 		var arbeiters = [];
	// 		arbeiters.push(
	// 		{
	// 			nombre:			"juan",
	// 			profile_pic:	"pic1",
	// 			servicio: 		"mecanico electricista plomeria construccion",
	// 			rating: 		1,
	// 			direccion: 		"uno",
	// 		});
	// 		arbeiters.push(
	// 		{
	// 			nombre:			"pablo",
	// 			profile_pic:	"pic2",
	// 			servicio: 		"electricista",
	// 			rating: 		2,
	// 			direccion: 		"dos",
	// 		});
	// 					arbeiters.push(
	// 		{
	// 			nombre:			"pedro",
	// 			profile_pic:	"pic3",
	// 			servicio: 		"plomeria",
	// 			rating: 		3,
	// 			direccion: 		"tres",
	// 		});
	// 					arbeiters.push(
	// 		{
	// 			nombre:			"prieto",
	// 			profile_pic:	"pic4",
	// 			servicio: 		"construccion",
	// 			rating: 		4,
	// 			direccion: 		"cuatro",
	// 		});
	// 		return arbeiters[this.contactId];
	// 	}
	// }
}
</script>

<style scoped>
button {
	background-color: #ffff8d;
}
</style>


