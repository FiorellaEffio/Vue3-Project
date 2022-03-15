<script setup>
import { createPinia, storeToRefs } from 'pinia';
import { useUsersStore } from '../store/useUsers'
import UserCard from '../components/users/UserCard.vue'
// const pinia = createPinia();

const users = useUsersStore();

// const { usersData, getLocations } = storeToRefs(users);
users.setUsersData();
const avatarImg = new URL(`../../src/assets/images/1.jpg`, import.meta.url).href
const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
const center = {lat: 51.093048, lng: 6.842120}
const markers = users.getLocations
</script>

<template>
<div class="p-4 mt-10">
  <div class="max-w-4xl mx-auto flex h-map-container">
    <div class="h-full w-1/3 overflow-y-auto">
      <UserCard v-for="(user, index) in users.usersData" :key="'user-'+index" :data="user"/>
    </div>
    <div class="h-96 w-2/3">
      <GMapMap
        :center="center"
        :zoom="2"
        map-type-id="terrain"
        class="h-map-container w-full"
      >
        <GMapCluster>
          <GMapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :icon="m.icon"
              :title="m.title"
              :clickable="true"
              @click="center=m.position"
          >
            <GMapInfoWindow>
              <div>{{ m.title }}</div>
            </GMapInfoWindow>
          </GMapMarker>
        </GMapCluster>
      </GMapMap>
    </div>
  </div>
</div>
</template>
<style>
.h-map-container {
  height: 510px;
}
</style>
