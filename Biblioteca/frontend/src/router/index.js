// Importações para Vue 3 e Vue Router 4
import { createRouter, createWebHistory } from 'vue-router';  // Ajustado para Vue 3
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Cadastro from '../views/Cadastro.vue';
import Catalogo from '../views/Catalogo.vue';

// Criação do roteador
const router = createRouter({
  history: createWebHistory(), // Usando o histórico para navegação
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,  // Verifique se o nome do componente está correto
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro,
    },
    {
      path: '/catalogo',
      name: 'Catalogo',
      component: Catalogo,
    },
    // outras rotas...
  ],
});

// Exportação do roteador para uso no main.js
export default router;
