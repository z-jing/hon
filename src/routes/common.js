const routes = [
    {
        path: '/',
        redirect: '/index',
        meta: {
            title: '首页'
        }
    },
    {
        path: '/index',
        name: 'index',
        meta: {
            title: '首页'
        },
        component: () => import('../pages/index')
    },
    {
        path: '/aboutUs',
        name: 'aboutUs',
        meta: {
            title: '关于我们'
        },
        component: () => import('../pages/aboutUs/aboutUs')
    },
]
export default routes