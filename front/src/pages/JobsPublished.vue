<template>
    <jobs-list :jobs="jobs" view="PUBLISHED" />
</template>

<script>
    import useJobs from '../use/jobs';
    import JobsList from '../components/JobsList.vue';

    export default {
        name: 'JobsPublished',
        components: { JobsList },
        setup() {
            const { jobs } = useJobs('PUBLISHED');

            return {
                jobs,
            };
        },
    };
</script>
