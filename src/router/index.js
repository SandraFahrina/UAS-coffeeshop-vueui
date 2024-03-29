import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/coshops/Home.vue'
import Createcoshops from '../views/coshops/Createcoshops.vue'
import Editcoshops from '../views/coshops/Editcoshops.vue'
import Detailcoshops from '../views/coshops/Detailcoshops.vue'
import Trans from '../views/trans/Trans.vue'
import Createtrans from '../views/trans/Createtrans.vue'
import Edittrans from '../views/trans/Edittrans.vue'
import Detailtrans from '../views/trans/Detailtrans.vue'
import Data from '../views/data/Data.vue'
import Createdata from '../views/data/Createdata.vue'
import Editdata from '../views/data/Editdata.vue'
import Detaildata from '../views/data/Detaildata.vue'
import Groups from '../views/groups/Groups.vue'
import Creategroups from '../views/groups/Creategroups.vue'
import Editgroups from '../views/groups/Editgroups.vue'
import Detailgroups from '../views/groups/Detailgroups.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createcoshops',
    name: 'Createcoshops',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createcoshops
  },
  {
    path: '/editcoshops/:id',
    name: 'Editcoshops',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editcoshops
  },
  {
    path: '/detailcoshops/:id',
    name: 'Detailcoshops',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailcoshops
  },

  {
    path: '/trans',
    name: 'Trans',
    component: Trans
  },
  {
    path: '/createtrans',
    name: 'Createtrans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createtrans
  },
  {
    path: '/edittrans/:id',
    name: 'Edittrans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Edittrans
  },
  {
    path: '/detailtrans/:id',
    name: 'Detailtrans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailtrans
  },

  {
    path: '/data',
    name: 'Data',
    component: Data
  },
  {
    path: '/createdata',
    name: 'Createdata',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createdata
  },
  {
    path: '/editdata/:id',
    name: 'Editdata',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editdata
  },
  {
    path: '/detaildata/:id',
    name: 'Detaildata',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detaildata
  },

  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/creategroups',
    name: 'Creategroups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creategroups
  },
  {
    path: '/editgroups/:id',
    name: 'Editgroups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editgroups
  },
  {
    path: '/detailgroups/:id',
    name: 'Detailgroups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailgroups
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
