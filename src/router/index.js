import { createRouter, createWebHistory } from 'vue-router';
import playlist from '@/router/modules/playlist.js';
import membermanage from '@/router/modules/membermanage.js';
import mainPage from '@/router/modules/mainPage.js';

const routes = [
    {
        redirect: '/index',
        path: '',
        name: ''
        // component: () => import('@/layout/Index.vue')
    },
    {
        path: '/sample',
        name: 'sample',
        component: () => import('@/views/sample/Sample.vue')
    },
    ...playlist,
    ...membermanage,
    ...mainPage

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
