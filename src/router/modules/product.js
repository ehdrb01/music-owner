const product = [
    {
        // path: '/product',
        // name: 'product',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/product/list',
                name: '/product/list',
                props: true,
                component: () => import('@/views/product/list.vue')
            },
            {
                path: '/product/view',
                name: '/product/view',
                props: true,
                component: () => import('@/views/product/view.vue')
            },
            {
                path: '/product/write',
                name: '/product/write',
                component: () => import('@/views/product/write.vue')
            }
        ]
    }
];
export default product;