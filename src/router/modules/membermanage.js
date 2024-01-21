const membermanage = [

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
        
   
];
export default membermanage;