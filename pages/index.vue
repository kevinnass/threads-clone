<template>
    <MainLayout>
        <div id="indexPage" class="text-white w-full overflow-auto">
            <div class="mx-auto max-w-[500px] overflow-hidde">
                <div id="Posts" class="px-4 max-w-[600px] mx-auto">
                    <div v-if="isPosts" v-for="post in posts" :key="post" >
                        <Post :post="post" @isDeleted="posts = []"/>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '../stores/user';

const userStore = useUserStore();
// const user = useSupabaseUser();

let posts = ref([]);
let isPosts = ref(true);
let isLoading = ref(false);

onBeforeMount(() => {
    posts.value = [
        {
            name: 'Kev dev',
            image: 'https://placehold.co/100',
            text: 'this is the tittle',
            picture: 'https://placehold.co/500',
        },
        
    ]
})
</script>
