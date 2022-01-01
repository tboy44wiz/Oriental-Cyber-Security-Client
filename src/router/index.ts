import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Blog from '@/views/Blog.vue';
import BlogDetails from '@/views/BlogDetails.vue';
import Register from "@/views/Register.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blogs/:id',
    name: 'BlogDetails',
    component: BlogDetails
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
