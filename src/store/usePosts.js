import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    counter: 0,
    name: 'Erik'
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
    }
  }
})