<template>
    <div class="sorting">
        <button @click="setSort(0)" :class="{'active-page': getSort === 0}">Id по возрастанию</button>
        <button @click="setSort(1)" :class="{'active-page': getSort === 1}">Id по убыванию</button>
        <button @click="setSort(2)" :class="{'active-page': getSort === 2}">Date по возрастанию</button>
        <button @click="setSort(3)" :class="{'active-page': getSort === 3}">Date по убыванию</button>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
    methods: {
        ...mapMutations({
            setSort: 'comments/setSort',
        })
    },
    computed: {
        ...mapGetters({
            getSort: 'comments/getSort'
        })
    }
}
</script>

<style scoped lang="scss">
.sorting {
    margin-top: 5rem;
    display: flex;
    justify-content: space-around;

    button {
        min-width: 200px;
        padding: 1rem;
        border: 1px solid #6fc;
        background: none;
        color: #ffffff;
        cursor: pointer;

        &:hover {
            background-color: #133040;
        }
    }
}

.active-page {
    background-color: #133040 !important;
}

@media (max-width: 850px) {
    .sorting {
        flex-direction: column;
        align-items: center;

        & > * {
            margin-bottom: 1rem;
            width: 90%;
        }
    }
}
</style>