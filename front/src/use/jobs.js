import { ref, onMounted } from 'vue';

const baseUrl = 'http://localhost:3001/jobs';

const fetchJobs = async (apiUrl) => {
    const response = await fetch(apiUrl);
    return response.json();
};

export default function useJobs(view, connectedUser) {
    const jobs = ref([]);

    onMounted(async () => {
        if (view === 'MINE') {
            await fetchMyJobs();
        } else {
            await fetchAllJobs(view);
        }
    });

    const fetchMyJobs = async () => {
        const apiUrl = `${baseUrl}?ownerId=${connectedUser.value.id}`;
        jobs.value = await fetchJobs(apiUrl);
    };

    const fetchAllJobs = async (category) => {
        const apiUrl = `${baseUrl}?category=${category}`;
        jobs.value = await fetchJobs(apiUrl);
    };

    return {
        jobs,
        fetchMyJobs,
    };
}
