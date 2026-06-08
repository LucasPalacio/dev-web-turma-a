import { createRouter, createWebHistory } from 'vue-router'
import FigurinhasComponent from '@/components/FigurinhasComponent.vue'

// Adicione aqui outras views que você quiser manter no projeto
// import MenuView from '@/views/MenuView.vue'

const routes = [
  // Rota principal — pode apontar para FigurinhasComponent direto
  // ou para uma MenuView se quiser uma página de início separada
  {
    path: '/',
    name: 'home',
    component: FigurinhasComponent   // mude para MenuView se preferir
  },
  {
    path: '/figurinhas',
    name: 'figurinhas',
    component: FigurinhasComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router