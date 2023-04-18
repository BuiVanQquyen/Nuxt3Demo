import { defineStore } from 'pinia'
export const useMainStore = defineStore('mainStore', {
    state: () => {
        return {
            count: 0
        }
    },
    getters: {

    },
    actions: {
        increment(){
            this.count++
        }
    }
})