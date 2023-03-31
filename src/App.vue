<template>
    <div class="app">
        <v-notification></v-notification>
        <v-loader v-if="loading"></v-loader>
        <div class="wrapper" v-if="!loading">
            <div class="comments">
                <v-sorting></v-sorting>
                <v-comments-list></v-comments-list>
                <v-pagination></v-pagination>
                <v-comment-form></v-comment-form>
            </div>
        </div>
    </div>
</template>

<script>

import {mapState} from "vuex";
import VNotification from "@/components/UI/v-Notification";
import VLoader from "@/components/UI/v-Loader";
import VSorting from "@/components/v-Sorting";
import VCommentsList from "@/components/v-Comments-list";
import VPagination from "@/components/v-Pagination";
import VCommentForm from "@/components/v-Comment-form";

export default {
    components: {VPagination, VCommentsList, VSorting, VLoader, VNotification, VCommentForm},
    computed: {
        ...mapState({
            loading: 'comments/loading',
        })
    }
};
</script>

<style lang="scss">
@import url('./css/normalize.css');

body {
    background-color: #0a192f;
}

.wrapper {
    max-width: 1110px;
    margin: 0 auto;
    border: none;
}
</style>
