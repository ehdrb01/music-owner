const mainPage = [
    {
        // path: '/',
        // name: '',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/index/:storeNo',
                name: 'index',
                component: () => import('@/views/main/index.vue'),
                props: true
            }
        ]
    }
];
export default mainPage;