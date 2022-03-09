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
  <div class='flex items-center w-full max-w-xl my-0 bg-white overflow-hidden mx-auto'>
    <div class='w-full'>
      <div class="flex w-full">
          <div class="mt-3 mx-5 flex flex-row">
              <div class='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>
                Comments:<div class="ml-1 text-gray-400 font-thin text-ms"> {{ commentsData.length }}</div>
              </div>
          </div>
          <div class="mt-3 mx-5 w-full flex justify-end">
              <div class='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>Likes: <div class="ml-1 text-gray-400 font-thin text-ms"> 120k</div></div>
          </div>
      </div>
      <div class="relative flex items-center self-center w-full max-w-xl px-4 pb-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
          <span class="absolute inset-y-0 right-0 flex items-center pr-6 pb-4">
              <button type="submit" class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                <svg class="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
          </span>
          <input type="search" class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue" style="border-radius: 25px" placeholder="Post a comment..." autocomplete="off">
      </div>
    </div>
  </div>
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
