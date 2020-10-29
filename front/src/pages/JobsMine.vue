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
    import JobsMixin from '../mixins/JobsMixin';
    import JobItem from '../components/JobItem.vue';

    export default {
        name: 'JobsMine',
        components: { JobItem },
        mixins: [JobsMixin()],
        computed: {
            draftJobs() {
                return this.jobs.filter((job) => job.category === 'DRAFT');
            },
            publishedJobs() {
                return this.jobs.filter((job) => job.category === 'PUBLISHED');
            },
        },
        watch: {
            async connectedUser() {
                await this.fetchMyJobs();
            },
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
