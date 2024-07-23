import {
  createRouter,
  createWebHistory
} from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ShowArticle from '../views/ShowArticle.vue'
import Create from '../views/Create.vue';
import ShowTags from '../views/ShowTags.vue';
import PageNotFound from '../views/PageNotFound.vue';
import Edit from '../views/Edit.vue';

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
      path: '/tag/:id',
      name: 'tag',
      component: ShowTags
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    },
    {
      path: '/:pathMatch(.*)',
      name: 'pageNotFound',
      component: PageNotFound
    },
  ]
})

export default router