<template>
    <div class="wrapper">
        <jobs-header />
        <router-view />
    </div>
</template>

<script>
    import JobsHeader from './components/JobsHeader.vue';

    export default {
        name: 'App',
        components: { JobsHeader },
    };
</script>

<style lang="scss" scoped>
    .wrapper {
        margin-right: auto;
        margin-left: auto;
        max-width: 1020px;
        padding-right: 10px;
        padding-left: 10px;
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
