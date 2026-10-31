<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { useVisitorStore } from '@/stores/visitor.js';
import MyFooter from './components/MyFooter.vue';

const visitorStore = useVisitorStore();

onMounted(() => {
    visitorStore.initID();
})
</script>

<template>
    <header style="margin: 20px 0;">
        <Navbar />
    </header>

    <RouterView />

    <Footer>
        <MyFooter />
    </Footer>
</template>

<style>
body {
    background-color: var(--prussian-blue-var3);
}
</style>