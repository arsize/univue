import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0 }
  },
  actions: {
    increment() {
      this.count++
    },
  },
  persist: {
    enabled: true,
    strategies: [],
  },
})
