import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PostItem from '../views/PostItem.vue'
import Users from '../views/Users.vue'

const routes = [
  { 
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/post/:id',
    name: 'PostItem',
    component: PostItem,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
