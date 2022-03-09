<script setup>
  const props = defineProps({
    data: Object,
  })
</script>

<template>
  <div class="flex items-center justify-center space-x-2">
    <div class="block">
      <div class="flex justify-center items-center space-x-2">
        <div class="bg-gray-50 w-auto rounded-xl px-2 pb-2">
          <div class="font-medium">
            <a class="hover:underline text-sm hover:cursor-pointer">
              <small>{{ data.name }}</small>&nbsp;
              <small class="text-slate-400	">{{ data.email }}</small>
            </a>
          </div>
          <div class="text-xs">
            {{ data.body }}
          </div>
        </div>
      </div>
      <div class="flex justify-start items-center text-xs w-full">
        <div class="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
          <a class="hover:underline hover:cursor-pointer">
            <small>Like</small>
          </a>
          <small class="self-center">.</small>
          <a class="hover:underline hover:cursor-pointer">
            <small>Reply</small>
          </a>
          <small class="self-center">.</small>
          <small>15 hour</small>
        </div>
      </div>
    </div>
  </div>
</template>
