const member = [
    {
        // path: '/member',
        // name: 'member',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/findId',
                name: 'findId',
                component: () => import('@/views/member/findId.vue')
            },
            {
                path: '/findPassword',
                name: 'findPassword',
                component: () => import('@/views/member/findPassword.vue')
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('@/views/member/login.vue')
            },
            {
                path: '/sign',
                name: 'sign',
                component: () => import('@/views/member/sign.vue')
            }
            // ,{
            //     path: '/oriSignIn',
            //     name: 'oriSignIn',
            //     component: () => import('@/views/member/oriSignIn.vue')
            // }
        ]
    }
];
export default member;