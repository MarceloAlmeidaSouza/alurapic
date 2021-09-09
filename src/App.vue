<template>
  <div class="corpo">
   <meu-menu :rotas="routes"/>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import routes from './routes.js';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
    'meu-menu' : Menu
  },
  data(){
    return {
      routes
    }
  }
}
</script>

<style scoped>
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }
  .pagina-enter, .pagina-fade-leave-active {
    opacity: 0
  }

  .pagina-enter-active, .pagina-fade-leave-active {
    transition: opacity .4s
  }
</style>
