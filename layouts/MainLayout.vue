<template>
    <div id="MainLayout" class="h-screen">
    <!-- Logo at the top -->
        <div class="w-full maw-w-[500px] mx-auto">
            <div id="TopMenu" class="w-full flex items-center justify-center px-2 h-10 my-2">
                <img class="w-[35px]" src="/public/threads-logo.png" alt="">
            </div>
        </div>
    <!-- Logo at the top -->

    <!-- Body -->

        <div class="flex w-full max-w-[500px] mx-auto h-full">
            <slot />
        </div>
    <!-- Body -->

    <!-- NavBar at the bottom -->

        <div 
            id="BottomNav"
            class="fixed z-50 bottom-0 flex w-full h-[70px] border-t border-t-gray-700 bg-black"
        >
            <div class="flex w-full max-w-[500px] mx-auto flex items-center justify-around">
                <button @click="navigateTo('/')" class="w-full h-full">
                    <Icon name="material-symbols:home-outline" size="35" color="#ffffff"/>
                </button>

                <button @click="userStore.isMenuOverlay = true" class="w-full h-full">
                    <Icon name="material-symbols:edit-square-outline-rounded" size="30" color="#ffffff"/>
                </button>

                <button @click="userStore.isLogoutOverlay = true" class="w-full h-full">
                    <Icon name="material-symbols:logout" size="30" color="#ffffff"/>
                </button>
            </div>
        </div>
    <!-- NavBar at the bottom -->

    </div>
</template>

<script setup>
import { navigateTo } from 'nuxt/app';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();

</script>
