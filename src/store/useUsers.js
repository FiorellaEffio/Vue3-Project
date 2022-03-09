import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    usersData: null
  }),
  getters: {
    getUserById: (state) => {
      return (userId) => state.usersData.find((user) => user.id === userId)
    },
    getLocations: (state) => {
      const locations = []
      state.usersData.forEach(function(user) {
        let userLocation = {
          position: {
            lat: parseInt(user.address.geo.lat),
            lng: parseInt(user.address.geo.lng)
          },
          icon: new URL(`../../src/assets/images/${user.id}.jpg`, import.meta.url).href,
          title: user.name
        }
        locations.push(userLocation)
      })
      return locations
    }
  },
  actions: {
    setUsersData() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((json) => {
          this.usersData = json;
        })
    }
  }
})