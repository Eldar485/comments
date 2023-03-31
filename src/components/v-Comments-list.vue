<template>
    <div class="list">
        <v-comment v-for="comment in getComments" :key="comment.id"
                   :comment="comment"></v-comment>
    </div>
</template>

<script>
import VComment from "@/components/v-Comment";
import {mapGetters} from "vuex";

export default {
    components: {VComment},
    computed: {
        ...mapGetters({
            getComments: 'comments/getComments'
        })
    }
}
</script>

<style scoped lang="scss">
.list {
    min-height: 590px;
}

@media (max-width: 850px) {
    .list {
        max-width: 90%;
        margin: 0 auto;
    }
}
</style>