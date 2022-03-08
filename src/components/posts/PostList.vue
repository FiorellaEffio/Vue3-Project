<script setup>
import { createPinia, storeToRefs } from 'pinia';
import { usePostsStore } from '../../store/usePosts'
import PostCard from './PostCard.vue'
const pinia = createPinia();

const posts = usePostsStore(pinia);
const { postsData } = storeToRefs(posts);
posts.setPostsData();
</script>

<template>
  <router-link
    v-for="(post, index) in postsData"
    :key="'post-'+index"
    :to="'/post/'+post.id"
  >
    <PostCard
      :data="post"
    />
  </router-link>
</template>
