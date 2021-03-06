import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import FoodDetails from '../views/FoodDetails.vue';
import DeliveryDetails from '../views/DeliveryDetails.vue';

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
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/food-details/:id',
    name: 'FoodDetails',
    component: FoodDetails,
  },
  {
    path: '/delivery',
    name: 'DeliveryDetails',
    component: DeliveryDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
