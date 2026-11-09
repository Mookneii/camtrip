import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PlaceDetailView from '../views/PlaceDetailView.vue'
import TripsView from '../views/TripsView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import CreateTripView from '../views/CreateTripView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/places/:id',
      name: 'place-detail',
      component: PlaceDetailView,
    },
    {
      path: '/trips',
      name: 'trips',
      component: TripsView,
    },
     {
      path: '/trips/new',
      name: 'create-trip',
      component: CreateTripView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
   
  ],
})

export default router
