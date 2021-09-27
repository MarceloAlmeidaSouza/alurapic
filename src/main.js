import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes.js'
import './directives/Transforme'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.root = "http://localhost:3000";

var router = new VueRouter({
  routes:routes,
  mode:'history'
});

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
