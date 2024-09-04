import Layout from '@/layout/index.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: { name: 'Home' },
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: 'demo',
                name: 'Demo',
                component: () => import('@/views/demo/index.vue'),
                meta: {
                    title: '示例'
                }
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('@/views/about/index.vue'),
                meta: {
                    title: '关于'
                }
            }
        ]
    }
];

export default routes;
