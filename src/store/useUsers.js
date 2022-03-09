import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    usersData: null
  }),
  getters: {
    getUserById: (state) => {
      return (userId) => state.usersData.find((user) => user.id === userId)
    },
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