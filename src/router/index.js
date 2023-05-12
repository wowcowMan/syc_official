import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'profile',
        component: () => import('../views/Profile.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/worksboard',
    name: 'worksboard',
    component: () => import('../views/Worksboard.vue'),
    children: [
      {
        path: 'gallery',
        component: () => import('../views/Gallery.vue')
      },
      {
        path: ':type/:category',
        component: () => import('../views/ProjectList.vue')
      },
      {
        path: ':type/:category/:project',
        component: () => import('../views/Project.vue')
      }
    ]
  },
  {
    path: '/contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})
export default router
