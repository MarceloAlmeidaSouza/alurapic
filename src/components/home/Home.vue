<template>
  <div>

    <h1 class="centralizado">{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <input type="search" class="filtro" placeholder="filtre pelo título da foto" v-on:input="filtro = $event.target.value" />
    {{filtro}}
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel v-bind:titulo="foto.titulo">
          <imagem-responsiva v-meu-transform:scale.rotate.animate="1.2" :url="foto.url" :titulo="foto.titulo"/>
          <router-link :to="{ name: 'altera', params:{id:foto._id}}">
            <meu-botao 
              rotulo="Alterar" 
              tipo="button"
              />
          </router-link> 
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
import FotoService from '../../domain/foto/FotoService';
export default {
  components:{'meu-painel':Painel,'imagem-responsiva':ImagemResponsiva,'meu-botao':Botao},
  name: 'app',
  data () {
    return {
      filtro:"",
      titulo:"Alurapic",
      images:[],
      mensagem:""
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
       this.service
        .apaga(foto._id)
        .then(
          () => {
            let indice = this.images.indexOf(foto);
            this.images.splice(indice, 1);
            this.mensagem = 'Foto removida com sucesso'
          }, 
          err => this.mensagem = err.message
        )
    }
  },
  created(){
    this.service = new FotoService(this.$resource);

    this.service.lista()
      .then(fotos => this.images = fotos, err => this.mensagem = err.message);
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
