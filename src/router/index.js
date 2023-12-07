import { createRouter, createWebHistory } from 'vue-router'
import TeamsListView from '@/views/TeamsListView.vue'
import LeaguesListView from '@/views/LeaguesListView.vue'
import TeamView from '@/views/TeamView.vue'
import LeagueView from '@/views/LeagueView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/teams',
    name: 'teams',
    component: TeamsListView
  },
  {
    path: '/leagues',
    name: 'leagues',
    component: LeaguesListView
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
    path: '/team/:id',
    name: 'team_detail',
    component: TeamView
  },
  {
    path: '/league/:id',
    name: 'league_detail',
    component: LeagueView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
