import {
  createRouter,
  createWebHistory
} from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ShowArticle from '../views/ShowArticle.vue'
import Create from '../views/Create.vue';
import ShowTags from '../views/ShowTags.vue';

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ShowArticle
    },
    {
      path: '/article/create',
      name: 'create',
      component: Create
    },
    {
      path: '/tag/:tag',
      name: 'tag',
      component: ShowTags
    }
  ]
})

export default router