<template>
    <jobs-list :jobs="jobs" view="DRAFT" />
</template>

<script>
    import useJobs from '../use/jobs';
    import JobsList from '../components/JobsList.vue';

    export default {
        name: 'JobsDrafts',
        components: { JobsList },
        setup() {
            const { jobs } = useJobs('DRAFT');

            return {
                jobs,
            };
        },
    };
</script>
