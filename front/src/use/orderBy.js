import _ from 'lodash';
import { ref, computed } from 'vue';

export default function orderBy(jobs) {
    const orderFields = [
        { label: 'Title', value: 'title', order: 'asc' },
        { label: 'Location', value: 'location', order: 'asc' },
        { label: 'Last updated', value: 'modificationDate', order: 'desc' },
        { label: 'Candidates', value: 'candidates', order: 'desc' },
    ];

    const orderBy = ref('title');

    const order = computed(() => orderFields.find((field) => field.value === orderBy.value).order);

    const orderedJobs = computed(() => _.orderBy(jobs.value, orderBy.value, order.value));

    return {
        orderFields,
        orderBy,
        orderedJobs,
    };
}
