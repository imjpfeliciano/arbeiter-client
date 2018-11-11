<template>
	<div class="card">
		<div class="card-content">
			<span class="card-title">Formulario de Registro</span>
			
      <div class="row">
        <div class="input-field col s12">
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
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Confirmar contraseña</label>
        </div>
      </div>
		</div>
		
		<!-- Action buttons -->
		<div class="row">
			<div class="col s12">
				<a class="waves-effect waves-light btn orange accent-2" href="/dashboard/catalogo">Registrarme</a>
			</div>
		</div>
	</div>
</template>

<script>
export default
{
	
}
</script>

<style>
</style>


