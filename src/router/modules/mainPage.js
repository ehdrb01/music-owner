const mainPage = [
    {
        // path: '/',
        // name: '',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import('@/views/main/index.vue')
            }
        ]
    }
];
export default mainPage;