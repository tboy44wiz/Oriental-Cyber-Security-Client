import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Blog from '@/views/Blog.vue';
import BlogDetails from '@/views/BlogDetails.vue';
import Gallery from "@/views/Gallery.vue";
import Register from "@/views/Register.vue";
import Auth from "@/views/Auth.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs/:id',
    name: 'BlogDetails',
    component: BlogDetails
  },
  {
    path: '/blogs',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/admin/:url',
    name: 'Auth',
    component: Auth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
