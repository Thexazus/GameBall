import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import ClickGame from './pages/ClickGame.vue'
import FastMathGame from './pages/FastMathGame.vue'
import ColorGuessGame from './pages/ColorGuessGame.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/click', component: ClickGame },
  { path: '/math', component: FastMathGame },
  { path: '/color', component: ColorGuessGame },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
