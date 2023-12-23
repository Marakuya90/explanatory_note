import { createRouter, createWebHistory } from 'vue-router'

import AllComponentsView from "@/views/allComponentsView.vue";
import Auth from "@/store/modules/auth/auth.js";
import BasicInfo from "@/views/BasicInfo.vue";


const routes = [
  {path:'/basicinfo', component: () => import ('@/views/BasicInfo.vue'), alias: '/'},
  // {path:'/basicinfo',component: BasicInfo},
  {path:'/all', component: AllComponentsView},
  {path:'/auth', component: Auth},


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
