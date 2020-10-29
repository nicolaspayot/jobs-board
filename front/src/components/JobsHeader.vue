<template>
    <div class="select jobs-users">
        Connected user:
        <select v-model="connectedUser">
            <option v-for="user in users" :key="user.id" :value="user">{{ user.name }}</option>
        </select>
    </div>

    <h1>Jobs board</h1>

    <nav class="jobs-nav">
        <ul>
            <li class="jobs-nav__item"><router-link to="/mine">Mine</router-link></li>
            <li class="jobs-nav__item"><router-link to="/drafts">All drafts</router-link></li>
            <li class="jobs-nav__item"><router-link to="/published">All published</router-link></li>
        </ul>
    </nav>
</template>

<script>
    const users = [
        { id: 'npa123', name: 'Nicolas Payot' },
        { id: 'sah123', name: 'Sahbi Ktifa' },
    ];

    export default {
        name: 'JobsHeader',
        data() {
            return {
                users,
                connectedUser: users[0],
            };
        },
        watch: {
            connectedUser: {
                handler() {
                    this.$store.commit('updateConnectedUser', this.connectedUser);
                },
                immediate: true,
            },
        },
    };
</script>

<style lang="scss" scoped>
    @use '../sass/base/variables/colors';
    @use '../sass/components/select';

    h1 {
        align-self: flex-start;
        margin-top: 0;
    }

    .jobs-users {
        position: absolute;
        right: 0;
        top: 0;
    }

    .jobs-nav {
        margin-bottom: 20px;
        width: 100%;

        & > ul {
            padding: 0;
            list-style: none;
            display: flex;
            box-shadow: inset 0 -2px 0 colors.$grey-main;
        }

        &__item {
            & > a {
                display: inline-block;
                text-decoration: none;
                font-size: 18px;
                font-weight: 700;
                color: #989fad;
                width: 200px;
                padding-bottom: 20px;
                padding-left: 20px;

                &.active {
                    color: colors.$blue-dark;
                    border-bottom: 2px solid colors.$blue-dark;
                }
            }
        }
    }
</style>
