import { createWebHistory, createRouter } from 'vue-router';
import JobsMine from '../pages/JobsMine.vue';
import JobsDrafts from '../pages/JobsDrafts.vue';
import JobsPublished from '../pages/JobsPublished.vue';

const routes = [
    {
        path: '/',
        redirect: '/mine',
    },
    {
        path: '/mine',
        name: 'JobsMine',
        component: JobsMine,
    },
    {
        path: '/drafts',
        name: 'JobsDrafts',
        component: JobsDrafts,
    },
    {
        path: '/published',
        name: 'JobsPublished',
        component: JobsPublished,
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
});

export default router;
