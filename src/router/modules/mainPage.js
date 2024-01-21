const mainPage = [
    {
        path: '/index/:storeNo',
        name: 'index',
        component: () => import('@/views/main/index.vue'),
        props: true
    }
];
export default mainPage;