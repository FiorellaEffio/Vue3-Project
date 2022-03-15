<script setup>
import { createPinia, storeToRefs } from 'pinia';
import { usePostsStore } from '../../store/usePosts'
import { useUsersStore } from '../../store/useUsers'

import { ref, computed, onBeforeMount } from 'vue'
import PostCard from './PostCard.vue'
// const pinia = createPinia();

const isDataLoaded = ref(false);
const error = ref(null);

const postsStore = usePostsStore();
const usersStore = useUsersStore();


// onBeforeMount(async () => {
//   try {
    await postsStore.setPostsData();
    await usersStore.setUsersData();
//   }
//   catch(error) {
//     error.value = error;
//   }
// })


// const { postsData } = storeToRefs(posts);
// await postsStore.setPostsData();
const posts = computed(() => postsStore.postsData)
isDataLoaded.value = true;
// console.log(postsStore.postsData)
// console.log(posts.value)
</script>

<template>
  <div class="px-2">
    <router-link
      v-for="(post, index) in posts"
      :key="'post-'+index"
      :to="'/post/'+post.id"
    >
      <PostCard
        :data="post"
      />
    </router-link>
  </div>
</template>
