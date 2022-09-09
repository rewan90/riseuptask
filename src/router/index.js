import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import addUser from '../views/addUser.vue'
import editUser from '../views/editUser.vue'
import viewUser from '../views/viewUser.vue'
import usersManager from '../views/usersManager.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect :"/users",
    component: Home
  },
  {
    path: '/add',
    name: 'addUser',
    component: addUser
  },
   {
    path: '/edit/:userId',
    name: 'editUser',
    component: editUser
  },
  {
    path: '/view/:userId',
    name: 'viewUser',
    component: viewUser
  },
   {
    path: '/users',
    name: 'usersManager',
    component: usersManager
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]
    
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
