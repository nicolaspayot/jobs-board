<template>
    <h1>Jobs board</h1>
    <section class="jobs-filters">
        <input v-model="query" class="jobs-filters__input" type="text" placeholder="Search jobs" />
        <label class="jobs-filters__checkbox">Remote only&nbsp;<input v-model="remoteOnly" type="checkbox" /></label>
        <label class="jobs-filters__checkbox"
            >Full-Time only&nbsp;<input v-model="fullTimeOnly" type="checkbox"
        /></label>
    </section>
    <nav class="jobs-nav">
        <ul>
            <li class="jobs-nav__item"><router-link to="/all">All jobs</router-link></li>
            <li class="jobs-nav__item"><router-link to="/drafts">Drafts</router-link></li>
            <li class="jobs-nav__item"><router-link to="/published">Published</router-link></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'JobsHeader',
        data() {
            return {
                query: '',
                remoteOnly: false,
                fullTimeOnly: false,
            };
        },
        watch: {
            query() {
                this.$store.commit('updateQuery', this.query);
            },
            remoteOnly() {
                this.$store.commit('toggleRemote', this.remoteOnly);
            },
            fullTimeOnly() {
                this.$store.commit('toggleFullTime', this.fullTimeOnly);
            },
        },
    };
</script>

<style lang="scss" scoped>
    @use '../sass/base/variables/colors';

    h1 {
        align-self: flex-start;
    }

    .jobs-filters {
        background-color: colors.$white;
        padding: 20px;
        box-shadow: 0 1px 5px rgba(colors.$grey-main, 0.8);
        border-radius: 6px;
        width: 100%;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__input {
            flex: 1;
            font-size: 18px;
            padding: 5px 10px;
            margin-right: 30px;
            border-radius: 6px;
            border: 2px solid rgba(colors.$grey-main, 0.8);
            outline-color: colors.$blue-main;
            color: colors.$grey-dark;
        }

        &__checkbox {
            display: flex;
            align-items: center;
            font-size: 18px;
            flex: 0 0 150px;
        }
    }

    .jobs-nav {
        margin-bottom: 30px;
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
