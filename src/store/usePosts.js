import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    counter: 0,
    name: 'Erik',
    postsData: null
  }),
  getters: {
    doubleCount: (state) => {
      state.counter * 2
    }
  },
  actions: {
    reset() {
      this.counter = 0;
    },
    addOne() {
      this.counter++;
    },
    setPostsData() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((json) => {
          console.log(json)
          this.postsData = json;
          console.log(this.postsData[1].id)
        })
    }
  }
})