import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        posts: [],
        // appUrl: 'https://threads-clone-five-eta.vercel.app/',
        isMenuOverlay: false,
        isLogoutOverlay: false,
    }),

    actions: {
        async getAllPosts() {
          let res = await useFetch('/api/get-all-posts')
          this.posts = res.data
          return res.data
        }
    },
})