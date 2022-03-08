<script setup>
import { ref } from 'vue'
import { createPinia, storeToRefs } from 'pinia';
import { usePostsStore } from '../../store/usePosts'
const pinia = createPinia();

const posts = usePostsStore(pinia);

const { counter, name, postsData } = storeToRefs(posts);

function add(value) {
  posts.$patch({
    counter: counter.value + value
  });
}

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <h4>{{ counter }}</h4>
  <button @click="posts.addOne">Click me</button>
  <button @click="add(15)">Click to add 15</button>

  <button type="button" @click="count++">count is: {{ count }}</button>

  <button @click="posts.setPostsData">Get Posts</button>
  <div v-for="(post, index) in postsData" :key="'post-'+index">
    ID: {{ post.id }}
    USERID: {{ post.userId }}
    Title: {{ post.title }}
    Body: {{ post.body }}
    <br><br>
  </div>
</template>

<style scoped>
</style>
