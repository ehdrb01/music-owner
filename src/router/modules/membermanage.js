const membermanage = [
    {
        // path: '/main',
        // name: 'layout',
        component: () => import('@/layout/index.vue'),
        children: [
            
            {
                path: '/mypage',
                name: 'mypage',
                component: () => import('@/views/membermanage/mypage.vue')
            },
            {
                path: '/showId',
                name: 'showId',
                component: () => import('@/views/membermanage/showId.vue')
            },
            {
                path: '/showIdNone',
                name: 'fshowIdNone',
                component: () => import('@/views/membermanage/showIdNone.vue')
            },
            {
                path: '/withdraw',
                name: 'fwithdraw',
                component: () => import('@/views/membermanage/withdraw.vue')
            },
            {
                path: '/withdrawEnd',
                name: 'fwithdrawEnd',
                component: () => import('@/views/membermanage/withdrawEnd.vue')
            }
        ]
    }
];
export default membermanage;