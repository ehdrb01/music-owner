const membermanage = [
    {
        // path: '/main',
        // name: 'layout',
        // component: () => import('@/layout/index.vue'),
        children: [
            
            {
                path: '/adminLogin',
                name: 'adminLogin',
                component: () => import('@/views/membermanage/adminLogin.vue')
            },
            {
                path: '/manageStore',
                name: 'manageStore',
                component: () => import('@/views/membermanage/manageStore.vue')
            }
        ]
    }
];
export default membermanage;