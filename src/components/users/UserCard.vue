<script setup>
const props = defineProps({
  data: Object
})
const avatarImg = new URL(`../../assets/images/${props.data.id}.jpg`, import.meta.url).href

</script>
<template>
  <div class="flex flex-col shadow items-center w-full max-w-xs px-4 py-2 bg-gray-50 rounded-md md:flex-row my-2">
    <div class="w-12 mr-4 rounded-full">
      <img
        class="w-auto h-fill rounded-full"
        :src="avatarImg"
        :alt="data.name"
      >
    </div>
    <div class="flex flex-col space-y-4">
      <div class="flex flex-col items-center md:items-start mr-4">
        <h2 class="text-sm">{{ data.name }}</h2>
        <p class="text-sm font-medium text-gray-400">
          {{ data.company.bs }} 
          <small>{{ data.company.name }}</small>
        </p>
      </div>
    </div>
  </div>
</template>