<template>
    <li class="job-item" :class="{ 'job-item--published': job.category === 'PUBLISHED' }">
        <div class="col__title">
            <p class="job-item__title">
                <span>{{ job.title }}</span>
                <span v-if="!job.fullTime" class="job-item__time"> - part-time</span>
            </p>
            <p class="job-item__location">
                <span>{{ job.location }}</span>
                <span v-if="job.remote"> | Remote 🏠</span>
            </p>
        </div>
        <dl class="col__date">
            <dt class="job-item__label">Modification date</dt>
            <dd class="job-item__date">{{ modificationDate }}</dd>
        </dl>
        <dl class="col__candidates">
            <dt class="job-item__label">Candidates</dt>
            <dd class="job-item__candidates">
                {{ job.candidates }}
            </dd>
        </dl>
        <div class="col__action">
            <button v-if="view === 'MINE' && job.category === 'DRAFT'" class="job-item__cta">Publish</button>
            <button v-else-if="view === 'MINE' && job.category === 'PUBLISHED'" class="job-item__cta">Promote</button>
            <button v-else class="job-item__cta">Add to mine</button>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'JobItem',
        props: {
            view: {
                type: String,
                default: 'MINE',
            },
            job: {
                type: Object,
                required: true,
            },
        },
        computed: {
            modificationDate() {
                return new Date(this.job.modificationDate).toLocaleDateString('en');
            },
        },
    };
</script>

<style lang="scss" scoped>
    @use '../sass/base/variables/colors';

    .job-item {
        background-color: #fff;
        padding: 15px 20px;
        box-shadow: 0 1px 5px rgba(colors.$grey-main, 0.8);
        border-radius: 6px;
        border-left: 8px solid colors.$grey-main;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        &--published {
            border-left-color: colors.$blue-dark;
        }

        p,
        dl,
        dt,
        dd {
            margin: 0;
        }

        &__title {
            font-size: 20px;
            font-weight: 700;
        }

        &__time {
            font-weight: 500;
        }

        &__label {
            color: colors.$grey-light2;
        }

        &__cta {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 3px;
            background-color: rgba(colors.$blue-main, 0.4);
            color: colors.$blue-dark;
            border: none;
            font-weight: 700;
            outline: none;
            transition: all 0.1s;

            &.disabled {
                opacity: 0.4;
            }

            &:hover:not(.disabled) {
                cursor: pointer;
            }

            &:active:not(.disabled) {
                transform: scale(0.9);
            }
        }
    }

    .col {
        &__title {
            flex: 0 0 450px;
        }

        &__date,
        &__candidates {
            flex: 0 0 180px;
        }
    }
</style>
