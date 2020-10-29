const baseUrl = 'http://localhost:3001/jobs';

const JobsMixin = (category = 'ALL') => {
    return {
        data() {
            return {
                jobs: [],
            };
        },
        async mounted() {
            const apiUrl = category !== 'ALL' ? `${baseUrl}?cat=${category}` : baseUrl;
            const response = await fetch(apiUrl);
            this.jobs = await response.json();
        },
    };
};

export default JobsMixin;
