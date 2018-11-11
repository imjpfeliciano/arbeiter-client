<template>
	<div class="card">
		<div class="card-content">
			<span class="card-title">Iniciar Sesión</span>
			
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
		</div>
		
		<!-- Action buttons -->
		<div class="row">
			<div class="col s6">
				<a class="waves-effect waves-light btn orange accent-2" href="/dashboard/catalogo">Iniciar Sesión</a>
			</div>
			<div class="col s6">
				<a class="waves-effect waves-light btn orange accent-2" href="/registro">Registrarme</a>
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