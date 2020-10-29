<template>
    <div class="jobs-sort">
        Sort by:&nbsp;
        <select v-model="orderBy">
            <option v-for="field in orderFields" :key="field.value" :value="field.value">{{ field.label }}</option>
        </select>
    </div>

    <ul class="jobs-list">
        <job-item v-for="job in filteredJobs" :key="job.id" :job="job" />
    </ul>
</template>

<script>
    import _ from 'lodash';
    import JobItem from '../components/JobItem.vue';

    export default {
        name: 'JobsList',
        components: { JobItem },
        props: {
            jobs: {
                type: Array,
                required: true,
            },
        },
        data() {
            return {
                orderFields: [
                    { label: 'Title', value: 'title', order: 'asc' },
                    { label: 'Location', value: 'location', order: 'asc' },
                    { label: 'Last updated', value: 'modificationDate', order: 'desc' },
                    { label: 'Candidates', value: 'candidates', order: 'desc' },
                ],
                orderBy: 'title',
            };
        },
        computed: {
            filteredJobs() {
                return _.orderBy(
                    this.jobs.filter(
                        (job) => this.queryFilter(job) && this.remoteFilter(job) && this.fullTimeFilter(job)
                    ),
                    this.orderBy,
                    this.order
                );
            },
            order() {
                return this.orderFields.find((field) => field.value === this.orderBy).order;
            },
        },
        methods: {
            queryFilter(job) {
                return job.title.toLowerCase().includes(this.$store.state.query.toLowerCase());
            },
            remoteFilter(job) {
                return this.$store.state.remoteOnly ? job.remote : true;
            },
            fullTimeFilter(job) {
                return this.$store.state.fullTimeOnly ? job.fullTime : true;
            },
        },
    };
</script>

<style lang="scss" scoped>
    @use '../sass/base/variables/colors';

    .jobs-sort {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
        margin: 0 0 15px;
        padding: 0;
        width: 100%;
        font-weight: 700;
        color: colors.$grey-light2;

        select {
            padding: 5px;
            font-size: 16px;
            font-weight: 700;
            border-radius: 6px;
            border: 2px solid rgba(colors.$grey-main, 0.8);
            outline-color: colors.$blue-main;
            color: colors.$grey-dark;
        }
    }

    .jobs-list {
        margin: 0;
        padding: 0;
        list-style: none;
        width: 100%;
    }
</style>
