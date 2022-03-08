import { defineStore } from 'pinia'

export const useCommentsStore = defineStore('comments', {
  state: () => ({
    postData: null,
    commentsData: null
  }),
  getters: {
  },
  actions: {
    setCurrentPostData(postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts?id=${postId}`)
        .then(response => response.json())
        .then((json) => {
          console.log(json[0])
          this.postData = json[0];
          console.log(this.postData)
        })
    },
    setCommentsData(postId) {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then((json) => {
          this.commentsData = json;
        })
    }
  }
})