const baseUrl = 'http://localhost:3001/jobs';

const fetchJobs = async (apiUrl) => {
    const response = await fetch(apiUrl);
    return response.json();
};

const JobsMixin = (view = 'MINE') => {
    return {
        data() {
            return {
                jobs: [],
            };
        },
        computed: {
            connectedUser() {
                return this.$store.state.connectedUser;
            },
        },
        async mounted() {
            if (view === 'MINE') {
                await this.fetchMyJobs();
            } else {
                await this.fetchAllJobs(view);
            }
        },
        methods: {
            async fetchMyJobs() {
                const apiUrl = `${baseUrl}?ownerId=${this.connectedUser.id}`;
                this.jobs = await fetchJobs(apiUrl);
            },
            async fetchAllJobs(category) {
                const apiUrl = `${baseUrl}?category=${category}`;
                this.jobs = await fetchJobs(apiUrl);
            },
        },
    };
};

export default JobsMixin;
