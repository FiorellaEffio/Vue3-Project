import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    usersData: null
  }),
  getters: {
  },
  actions: {
    setUsersData() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((json) => {
          console.log(json)
          this.usersData = json;
          console.log(this.usersData[1])
        })
    }
  }
})