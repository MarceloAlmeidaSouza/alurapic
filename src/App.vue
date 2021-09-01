<template>
  <div id="app" class='corpo'>
	<h1 class='centralizado'>{{ msg }}</h1>
  <ul class='lista-fotos'>
    <li class='lista-fotos-item' v-for="image of images">
      <img v-bind:src="image.url" :title="image.titulo">
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Chaves {{}} de interpolação.',
      images:[]
    }
  },
  created(){
    var r = this.$http.get('http://localhost:3000/v1/fotos');
    r.then(r=> r.json()).then(d=>this.images = d)
  }
}
</script>

<style>
  .corpo{
    font-family: Helvetica, sans-sarif;
    width:96%;
    margin:0 auto;
  }
  .centralizado{
    text-align:center;
  }
  .lista-fotos{
    list-style:none;
  }
  .lista-fotos .lista-fotos-item{
    display:inline;
  }
  img{
    height: 200px;
    width: 200px;
  }
</style>
