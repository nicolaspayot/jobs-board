<template>
    <h2>Drafts</h2>
    <ul class="jobs-list">
        <job-item v-for="job in draftJobs" :key="job.id" :job="job" />
    </ul>
    <h2>Published</h2>
    <ul class="jobs-list">
        <job-item v-for="job in publishedJobs" :key="job.id" :job="job" />
    </ul>
</template>

<script>
    import { computed, watch } from 'vue';
    import useUsers from '../use/users';
    import useJobs from '../use/jobs';
    import JobItem from '../components/JobItem.vue';

    export default {
        name: 'JobsMine',
        components: { JobItem },
        setup() {
            const { connectedUser } = useUsers();

            const { jobs, fetchMyJobs } = useJobs('MINE', connectedUser);

            const draftJobs = computed(() => jobs.value.filter((job) => job.category === 'DRAFT'));
            const publishedJobs = computed(() => jobs.value.filter((job) => job.category === 'PUBLISHED'));

            watch(connectedUser, fetchMyJobs);

            return {
                draftJobs,
                publishedJobs,
            };
        },
    };
</script>

<style lang="scss" scoped>
    h2 {
        align-self: flex-start;
        margin-top: 0;
    }

    .jobs-list {
        margin-top: 0;
        margin-bottom: 30px;
        padding: 0;
        list-style: none;
        width: 100%;
    }
</style>
