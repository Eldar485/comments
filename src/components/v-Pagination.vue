<template>
    <div class="pagination" v-if="totalCommentsCount > 0">
        <div class="page" @click="selectPage('prev')">&lt;</div>
        <div class="page"
             v-for="page in totalPages"
             :key="page"
             :class="{'active-page': page === this.getPage + 1}"
             @click="selectPage(page)">
            {{ page }}
        </div>
        <div class="page" @click="selectPage('next')"> > </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
    methods: {
        ...mapMutations({
            setPage: 'comments/setPage',
        }),
        selectPage(page) {
            if (Number.isInteger(page)) {
                this.setPage(page - 1)
            }
            if (page === 'prev' && this.getPage !== 0) {
                this.setPage(this.getPage - 1)
            }
            if (page === 'next' && this.getPage !== this.totalPages - 1) {
                this.setPage(this.getPage + 1)
            }
        }
    },
    computed: {
        ...mapGetters({
            totalCommentsCount: 'comments/getTotalCommentsCount',
            totalPages: 'comments/getTotalPages',
            getPage: 'comments/getPage',
        })
    }
}
</script>

<style scoped lang="scss">
.pagination {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}

.page {
    color: #6fc;
    font-size: 1.2rem;
    padding: 0.2rem 0.5rem;
    border: 1px solid #6fc;
    margin-right: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #133040;
    }
}

.active-page {
    background-color: #133040 !important;
}
</style>