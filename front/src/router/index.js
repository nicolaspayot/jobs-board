import { createWebHistory, createRouter } from 'vue-router';
import JobsAll from '../pages/JobsAll.vue';
import JobsDrafts from '../pages/JobsDrafts.vue';
import JobsPublished from '../pages/JobsPublished.vue';

const routes = [
    {
        path: '/',
        redirect: '/all',
    },
    {
        path: '/all',
        name: 'JobsAll',
        component: JobsAll,
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
