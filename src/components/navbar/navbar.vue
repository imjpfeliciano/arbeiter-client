<template>
  <nav>
    <div class="nav-wrapper indigo">
      <a href="/" class="brand-logo">Arbeiter</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/">Login</a></li>
        <li><a href="/registro">Registrarme</a></li>
        <li><a href="/dashboard/catalogo">Catalogo</a></li>
        <li><a href="/filter/mecanico">Búsqueda</a></li>
        <li><a href="/contact/53">Chat</a></li>
        <li><a href="#modal1" id="notificaciones"><i class="material-icons">notifications</i></a> <span id="counter">1</span> </li>
      </ul>
    </div>    
    <div id="modal1" class="modal">
      <div class="modal-content"> 
        <div class="row">
          <form class="col s12">
            <div class="rating">              
                <label>
                  <input type="radio" name="stars" value="1" />
                  <span class="icon">★</span>
                </label>
                <label>
                  <input type="radio" name="stars" value="2" />
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                </label>
                <label>
                  <input type="radio" name="stars" value="3" />
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                  <span class="icon">★</span>   
                </label>
                <label>
                  <input type="radio" name="stars" value="4" />
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                </label>
                <label>
                  <input type="radio" name="stars" value="5" />
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                  <span class="icon">★</span>
                </label>
              
            </div>
              <div class="input-field">
                <i class="material-icons prefix orange-text">mode_edit</i>
                <textarea id="icon_prefix2" class="materialize-textarea h-50px"></textarea>
                <label for="icon_prefix2">Mensaje</label>
              </div>            

            <div class="file-field input-field">
              <div class="btn orange">
                <span>File</span>
                <input type="file">
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text" placeholder="Sube una foto">
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-effect waves-light btn-small orange">Enviar </a>
      </div>
    </div>
  </nav>
        
</template>

<script>
$(document).ready(function(){
  $(':radio').change(function() {
    console.log('New star rating: ' + this.value);
  });
  $('.modal').modal();
  $(document).on('click', '#notificaciones', function(){
    $('#modal1').modal('open');
  });  
});
export default {};
</script>

<style>
.h-50px{
  height: 50px;
}
#counter {
  display: flex;
  position: absolute;
  color: #fff;
  background: red;
  top: 29%;
  right: 0;
  height: 20px;
  width: 20px;
  border-radius: 50% 50%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  z-index: 1;
}
.rating {
  /* display: inline-block; */
  position: relative;
  margin-bottom: 1em;
  line-height: 50px;  
  font-size: 2em;
}

.rating label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  cursor: pointer;
}

.rating label:last-child {
  position: static;
}

.rating label:nth-child(1) {
  z-index: 5;
}

.rating label:nth-child(2) {
  z-index: 4;
}

.rating label:nth-child(3) {
  z-index: 3;
}

.rating label:nth-child(4) {
  z-index: 2;
}

.rating label:nth-child(5) {
  z-index: 1;
}

.rating label input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.rating label .icon {
  float: left;
  color: transparent;  
  font-size: 2em;
}

.rating label:last-child .icon {
  color: #6b6b6b70;
}

.rating:not(:hover) label input:checked ~ .icon,
.rating:hover label:hover input ~ .icon {
  color: #ffff00;
}

.rating label input:focus:not(:checked) ~ .icon:last-child {
  color: #6b6b6b70;
  text-shadow: 0 0 5px #ffff00;
}
.d-none{
  display: none;
}
.stars+.icon::after, .stars+.icon::before{
display: none;
}
[type="radio"]:not(:checked)+span:before, [type="radio"]:not(:checked)+span:after{
  display: none;
  appearance: none; 
}
[type="radio"]:not(:checked)+span, [type="radio"]:checked+span,{
  font-size: 2em;
  line-height: unset;
}
[type="radio"]:checked + label::after, [type="radio"].with-gap:checked + label::after {
    background-color: rgb(255, 138, 6) !important;
}
[type="radio"]:checked + label::after, [type="radio"].with-gap:checked + label::before, [type="radio"].with-gap:checked + label::after {
    border: 2px solid rgb(255, 138, 6) !important;
}
</style>
