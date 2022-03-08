import { defineStore } from 'pinia'

export const useCommentsStore = defineStore('comments', {
  state: () => ({
    comments: null
  }),
  getters: {
  },
  actions: {
    setCommentsData() {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then((json) => {
          console.log(json)
          this.comments = json;
          console.log(this.comments[1])
        })
    }
  }
})