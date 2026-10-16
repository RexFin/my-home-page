<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
    <header>
        <Navbar />
    </header>

    <RouterView />
</template>

<style>
body {
    background-color: var(--prussian-blue-var3);
}
</style>