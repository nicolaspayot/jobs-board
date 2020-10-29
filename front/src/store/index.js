import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        connectedUser: null,
    },
    mutations: {
        updateConnectedUser(state, connectedUser) {
            state.connectedUser = connectedUser;
        },
    },
});
