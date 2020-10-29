import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        query: '',
        remoteOnly: false,
        fullTimeOnly: false,
    },
    mutations: {
        updateQuery(state, query) {
            state.query = query;
        },
        toggleRemote(state, remoteOnly) {
            state.remoteOnly = remoteOnly;
        },
        toggleFullTime(state, fullTimeOnly) {
            state.fullTimeOnly = fullTimeOnly;
        },
    },
});
