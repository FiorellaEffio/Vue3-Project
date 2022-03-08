<script setup>
import { ref } from 'vue'

defineProps({
  data: Object
})

const count = ref(0)
</script>

<template>
  <div class="max-w-md mx-auto" style="background: red;">
      ID: {{ data }}<br>
      <!-- USERID: {{ data.userId }}
      Title: {{ data.title }}
      Body: {{ data.body }} -->
  </div>
  <br>
</template>

<style scoped>
</style>
