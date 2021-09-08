<template>
  <div>

    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" placeholder="filtre pelo título da foto" v-on:input="filtro = $event.target.value" />
    {{filtro}}
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel v-bind:titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo"></imagem-responsiva>
        </meu-painel>
      </li>
    </ul>

  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';
import ImagemResponsiva from './components/shared/imagem-responsiva/ImagemResponsiva.vue';

export default {
  components:{'meu-painel':Painel,'imagem-responsiva':ImagemResponsiva},
  name: 'app',
  data () {
    return {
      filtro:"",
      titulo:"Alurapic",
      images:[]
    }
  },
  computed:{
    fotosComFiltro(){
      if(this.filtro){
        return this.images.filter(x=>x.titulo.match(new RegExp(this.filtro,"gi")));
      }
      return this.images;
    }
  },
  created(){
    var r = this.$http.get('http://localhost:3000/v1/fotos');
    r.then(r=> r.json()).then(d=>this.images = d)
  }
}
</script>

<style>
  .titulo {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }
  .filtro {
    display: block;
    width: 100%;
  }
</style>
