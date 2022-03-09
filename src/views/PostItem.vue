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
  <PostCard
    :data="postData"
  />
  <div class="flex items-center w-full max-w-xl mt-0 bg-white rounded-lg overflow-hidden mx-auto">
    <div class="bg-white w-full h-auto px-3 py-2 flex flex-col space-y-2">
      <Comment
        v-for="(comment, index) in commentsData"
        :key="'comment-'+index"
        :data="comment"
      />
    </div>
  </div>
</template>
