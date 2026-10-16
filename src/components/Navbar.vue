<template>
    <nav>
        <RouterLink to="/" class="nav_element tektur">Home</RouterLink>
        <a class="nav_element tektur" href="#">Projects</a>
        <a class="nav_element tektur" href="#">About</a>
        <a class="nav_element tektur" href="#">Contacts</a>
    </nav>
</template>
<script setup>

</script>
<style scoped>
    nav {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 20px;
        padding: 20px 0;
        background-color: var(--smart-blue);
    }

    nav a {
        text-decoration: none;
        color: white;
        font-size: 20px;
    }

    .nav_element:not(:last-child) {
        margin-right: 20px;
    }
</style>