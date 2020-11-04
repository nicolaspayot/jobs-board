<template>
    <section class="jobs-filters">
        <input v-model="query" class="jobs-filters__input" type="text" placeholder="Search jobs" />
        <label class="jobs-filters__checkbox">Remote only&nbsp;<input v-model="remoteOnly" type="checkbox" /></label>
        <label class="jobs-filters__checkbox"
            >Full-Time only&nbsp;<input v-model="fullTimeOnly" type="checkbox"
        /></label>
    </section>

    <div class="select jobs-sort">
        Sort by:&nbsp;
        <select v-model="orderBy">
            <option v-for="field in orderFields" :key="field.value" :value="field.value">{{ field.label }}</option>
        </select>
    </div>

    <ul class="jobs-list">
        <job-item v-for="job in filteredJobs" :key="job.id" :job="job" :view="view" />
    </ul>
</template>

<script>
    import _ from 'lodash';
    import JobItem from '../components/JobItem.vue';

    export default {
        name: 'JobsList',
        components: { JobItem },
        props: {
            view: {
                type: String,
                default: 'MINE',
            },
            jobs: {
                type: Array,
                required: true,
            },
        },
        data() {
            return {
                query: '',
                remoteOnly: false,
                fullTimeOnly: false,
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
                return job.title.toLowerCase().includes(this.query.toLowerCase());
            },
            remoteFilter(job) {
                return this.remoteOnly ? job.remote : true;
            },
            fullTimeFilter(job) {
                return this.fullTimeOnly ? job.fullTime : true;
            },
        },
    };
</script>

<style lang="scss" scoped>
    @use '../sass/base/variables/colors';
    @use '../sass/components/select';

    .jobs-filters {
        background-color: colors.$white;
        padding: 20px;
        box-shadow: 0 1px 5px rgba(colors.$grey-main, 0.8);
        border-radius: 6px;
        width: 100%;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__input {
            flex: 1;
            font-size: 18px;
            padding: 5px 10px;
            margin-right: 30px;
            border-radius: 6px;
            border: 2px solid rgba(colors.$grey-main, 0.8);
            outline-color: colors.$blue-main;
            color: colors.$grey-dark;
        }

        &__checkbox {
            display: flex;
            align-items: center;
            font-size: 18px;
            flex: 0 0 150px;
        }
    }

    .jobs-sort {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
        margin: 0 0 15px;
        padding: 0;
        width: 100%;
    }

    .jobs-list {
        margin: 0;
        padding: 0;
        list-style: none;
        width: 100%;
    }
</style>
