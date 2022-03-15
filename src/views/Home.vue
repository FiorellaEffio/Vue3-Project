<script setup>
import PostList from '../components/posts/PostList.vue'
</script>

<template>  
  <Suspense>
    <PostList msg="Hello Vue 3 + Vite" />
  </Suspense>
</template>
