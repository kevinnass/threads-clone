<template>
    <div id="Modal" class="fixed grid place-items-center h-screen z-50 bottom-0 bg-black bg-opacity-50 backdrop-blur-md h-screen w-full">
        <div class="bg-black w-full max-w-[300px] rounded-lg text-white border border-gray-600 p-2">
            <button
                @click="useUserStore.isLogoutOverlay = false"
                class="flex items-center justify-between bg-black w-full p-3"
            >
                <div>Close Modal</div>
            </button>
        </div>
    </div>
</template>

<script setup>

</script>
