<script setup>
import { createPinia, storeToRefs } from 'pinia';
import { useUsersStore } from '../../store/useUsers'
const pinia = createPinia();

const users = useUsersStore(pinia);

const { usersData, getUserById } = storeToRefs(users);
users.setUsersData();
const props = defineProps({
  data: Object
})
const avatarImg = new URL(`../../assets/images/${props.data.userId}.jpg`, import.meta.url).href
setTimeout(() => {
  // console.log("get user info by id")
  const userInfoPost = users.getUserById(props.data.userId);
  // console.log(userInfoPost)
}, 5000);

</script>

<template>
  <div class='flex items-center w-full max-w-xl my-4 bg-white shadow-md rounded-lg overflow-hidden mx-auto border-white border hover:border-gray-300'>
    <div class='w-full'>
      <div class="flex flex-row mt-2 px-2 py-3 mx-3">
          <div class="w-auto h-auto rounded-full border-2 border-pink-500">
              <img
                class='w-12 h-12 object-cover rounded-full shadow cursor-pointer'
                alt='User avatar'
                :src="avatarImg"
              >
          </div>
          <div class="flex flex-col mb-2 ml-4 mt-1">
              <div class='text-gray-600 text-sm font-semibold text-left'>{{  }}</div>
              <div class='flex w-full mt-1'>
                  <div class='text-blue-700 font-base text-xs mr-1 cursor-pointer'>
                      UX Design
                  </div> 
                  <div class='text-gray-400 font-thin text-xs'>
                      • 30 seconds ago
                  </div>
              </div>
          </div>
      </div>
      <div class="border-b border-gray-100"></div> 
      <div class='text-left text-gray-600 font-semibold text-lg mb-2 mt-2 mx-3 px-2'>
        {{ data.title }}
      </div>
      <div class='text-left text-gray-500 font-thin text-sm mb-6 mx-3 px-2'>
        {{ data.body }}  
      </div>
      <div class="flex justify-start mb-4 border-t border-gray-100">
          <div class="flex w-full mt-1 pt-2 pl-5">
              <span class="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
              </span>
              <img class="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              <img class="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              <img class="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
              <img class="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
          </div>
          <div class="flex justify-end w-full mt-1 pt-2 pr-5">
              <span class="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
              </span>
              <span class="transition ease-out duration-300 hover:bg-blue-500 bg-blue-600 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
              </span>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
