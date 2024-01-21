const member = [
    {
        // path: '/member',
        // name: 'member',
        // component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/playlist/:storeNo',
                name: 'playlist',
                component: () => import('@/views/playlist/list.vue')
            }
        ]
    }
];
export default member;