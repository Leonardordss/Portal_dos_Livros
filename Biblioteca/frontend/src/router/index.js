import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue'; 
import Catalogo from '../views/Catalogo.vue';
import UserRegister from '../views/UserRegister.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: Catalogo,
  },
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegister,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
