<template>
    <jobs-list :jobs="jobs" view="DRAFT" />
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
