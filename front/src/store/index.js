import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        connectedUser: null,
        query: '',
        remoteOnly: false,
        fullTimeOnly: false,
    },
    mutations: {
        updateConnectedUser(state, connectedUser) {
            state.connectedUser = connectedUser;
        },
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
