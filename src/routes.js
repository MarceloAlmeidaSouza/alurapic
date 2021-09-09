import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
const routes = [
    {path:'/',component:Home,titulo:"Home"},
    {path:'/cadastro',component:Cadastro,titulo:"Cadastro"}
];
export default routes;