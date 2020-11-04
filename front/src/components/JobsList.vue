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
        <job-item v-for="job in orderedJobs" :key="job.id" :job="job" :view="view" />
    </ul>
</template>

<script>
    import { computed } from 'vue';
    import JobItem from '../components/JobItem.vue';
    import useFilters from '../use/filters';
    import useOrderBy from '../use/orderBy';

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
        setup(props) {
            const { query, remoteOnly, fullTimeOnly, filteredJobs } = useFilters(computed(() => props.jobs));

            const { orderFields, orderBy, orderedJobs } = useOrderBy(filteredJobs);

            return {
                query,
                remoteOnly,
                fullTimeOnly,
                orderFields,
                orderBy,
                orderedJobs,
            };
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
