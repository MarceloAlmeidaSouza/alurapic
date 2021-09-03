<template>
  <div>

    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" placeholder="filtre pelo título da foto" v-on:input="filtro = $event.target.value" />
    {{filtro}}
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in images">
        <meu-painel v-bind:titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </meu-painel>
      </li>
    </ul>

  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';
export default {
  components:{'meu-painel':Painel},
  name: 'app',
  data () {
    return {
      filtro:"",
      titulo:"Alurapic",
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

  .imagem-responsiva {
    width: 100%;
  }
  .filtro {
    display: block;
    width: 100%;
  }
</style>
