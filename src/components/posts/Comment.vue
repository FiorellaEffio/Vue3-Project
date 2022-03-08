<script setup>
defineProps({
  data: Object
})
</script>

<template>
  <div class="max-w-md mx-auto">
    ID: {{ data.id }}
    name: {{ data.name }}
    email: {{ data.email }}
    Body: {{ data.body }}
    <br><br>
  </div>
</template>
