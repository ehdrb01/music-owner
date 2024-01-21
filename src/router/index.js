import { createRouter, createWebHistory } from 'vue-router';
import playlist from '@/router/modules/playlist.js';
import membermanage from '@/router/modules/membermanage.js';
import mainPage from '@/router/modules/mainPage.js';

const routes = [
    {
        path: '',
        redirect: '/index',
        name: 'index'
    },
    {
        redirect: '',
        path: '',
        name: 'layout',
        component: () => import('@/layout/Index.vue'),
        children: [
            ...playlist,
            ...membermanage,
            ...mainPage
        ]
    },
    {
        path: '/sample',
        name: 'sample',
        component: () => import('@/views/sample/Sample.vue')
    }
  

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
