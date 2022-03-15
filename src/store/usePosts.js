import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    counter: 0,
    postsData: []
  }),
  getters: {
    doubleCount: (state) => {
      state.counter * 2
    }
  },
  actions: {
    async setPostsData() {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts')
      this.postsData = await data.json();
    }
  }
})