<template>
    <button @click="disparaAcao" class="botao" :class="estiloDoBotao" :type="tipo">{{rotulo}}</button>
</template>
<script>
export default {

   props: ['tipo', 'rotulo','confirmacao','estilo'],
   computed:{
       estiloDoBotao(){
           return this.estilo == "padrao" || !this.estilo ? "botao-padrao" : "botao-perigo";
       }
   },
    methods:{
            disparaAcao(){
                if(this.$props.confirmacao && confirm('Confirma?')) {
                    this.$emit("botaoAtivado");
                }else{
                    this.$emit("botaoAtivado");
                }
        }
    }
}
</script>    

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }

</style>