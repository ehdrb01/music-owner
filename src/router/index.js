import { createRouter, createWebHistory } from 'vue-router';
import membermanage from '@/router/modules/membermanage.js';
import member from '@/router/modules/member.js';
import product from '@/router/modules/product.js';
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
    ...membermanage,
    ...member,
    ...product,
    ...mainPage

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
