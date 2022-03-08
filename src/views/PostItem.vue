<script setup>
import { ref } from 'vue'
import { createPinia, storeToRefs } from 'pinia';
import { useCommentsStore } from '../store/useComments'
import { useRoute } from 'vue-router'
import PostCard from '../components/posts/PostCard.vue'
import Comment from '../components/posts/Comment.vue'
const pinia = createPinia();

const comments = useCommentsStore(pinia);
const { commentsData, postData } = storeToRefs(comments);
const route = useRoute()
comments.setCurrentPostData(route.params.id);
comments.setCommentsData(route.params.id);

</script>

<template>
  <p>Post Item component view {{ $route.params.id }}</p>
  <PostCard
    :data="postData"
  />
  <Comment
    v-for="(comment, index) in commentsData"
    :key="'comment-'+index"
    :data="comment"
  />
</template>
