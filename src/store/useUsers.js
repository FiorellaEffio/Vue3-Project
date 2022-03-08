import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: null
  }),
  getters: {
  },
  actions: {
    setUsersData() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((json) => {
          console.log(json)
          this.users = json;
          console.log(this.users[1])
        })
    }
  }
})