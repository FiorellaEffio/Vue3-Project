<script setup>
import { createPinia, storeToRefs } from 'pinia';
import { useUsersStore } from '../store/useUsers'
const pinia = createPinia();

const users = useUsersStore(pinia);

const { usersData } = storeToRefs(users);
users.setUsersData();
</script>

<template>
  <p>Users component view</p>
  <div v-for="(user, index) in usersData" :key="'user-'+index">
    ID: {{ user.id }}
    Email: {{ user.email }}
    Name: {{ user.name }}
    Phone: {{ user.phone }}
    <br><br>
  </div>
</template>
