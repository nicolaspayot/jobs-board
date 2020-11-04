import { reactive, toRefs, computed } from 'vue';

export default function useFilters(jobs) {
    const state = reactive({
        query: '',
        remoteOnly: false,
        fullTimeOnly: false,
    });

    const queryFilter = (job) => job.title.toLowerCase().includes(state.query.toLowerCase());
    const remoteFilter = (job) => (state.remoteOnly ? job.remote : true);
    const fullTimeFilter = (job) => (state.fullTimeOnly ? job.fullTime : true);

    const filteredJobs = computed(() =>
        jobs.value.filter((job) => queryFilter(job) && remoteFilter(job) && fullTimeFilter(job))
    );

    return {
        ...toRefs(state),
        filteredJobs,
    };
}
