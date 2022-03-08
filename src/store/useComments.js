import { defineStore } from 'pinia'

export const useCommentsStore = defineStore('comments', {
  state: () => ({
    comments: null
  }),
  getters: {
  },
  actions: {
    setCommentsData(postId) {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then((json) => {
          console.log(json)
          this.comments = json;
          console.log(this.comments[1])
        })
    }
  }
})