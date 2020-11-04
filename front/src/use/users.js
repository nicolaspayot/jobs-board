import { ref } from 'vue';

const users = [
    { id: 'npa123', name: 'Nicolas Payot' },
    { id: 'sah123', name: 'Sahbi Ktifa' },
];

const connectedUser = ref(users[0]);

export default function useUsers() {
    return {
        users,
        connectedUser,
    };
}
