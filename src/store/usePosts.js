import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    counter: 0,
    postsData: null
  }),
  getters: {
    doubleCount: (state) => {
      state.counter * 2
    }
  },
  actions: {
    setPostsData() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((json) => {
          this.postsData = json;
        })
    }
  }
})