<template>
    <jobs-list :jobs="jobs" />
</template>

<script>
    import JobsMixin from '../mixins/JobsMixin';
    import JobsList from '../components/JobsList.vue';

    export default {
        name: 'JobsDrafts',
        components: { JobsList },
        mixins: [JobsMixin('DRAFT')],
    };
</script>
