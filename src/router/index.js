import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Details from '../views/DetailsView.vue'
import Create from '../views/CreateView.vue'
import Tag from '../views/TagView.vue'
import RealTime from '../views/RealTimeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/realtime',
    name: 'RealTime',
    component: RealTime
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
