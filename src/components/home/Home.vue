<template>
  <div>

    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" placeholder="filtre pelo título da foto" v-on:input="filtro = $event.target.value" />
    {{filtro}}
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel v-bind:titulo="foto.titulo">
          <imagem-responsiva v-meu-transforme="1" :url="foto.url" :titulo="foto.titulo"/>
          <meu-botao estilo="perigo" :confirmacao="false" tipo="button" rotulo="Remover"  @botaoAtivado="remove(foto)"/>
        </meu-painel>
      </li>
    </ul>

  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
export default {
  components:{'meu-painel':Painel,'imagem-responsiva':ImagemResponsiva,'meu-botao':Botao},
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
  methods:{
    remove(foto){
             alert(foto.titulo);
      
    }
  },
  created(){
    var r = this.$http.get('http://localhost:3000/v1/fotos');
    r.then(r=> r.json()).then(d=>this.images = d)
  }
}
</script>

<style scoped>
  .titulo {
    text-align: center;
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
