<template>
    <nav>
        <div class="nav-group">
            <a class="github-link tiny5" target="_blank" href="https://github.com/RexFin/my-home-page">
                REXFIN
            </a>
        </div>

        <div class="nav-group">
            <RouterLink to="/" class="nav_element tektur">Home</RouterLink>
            <a class="nav_element tektur" href="#">About</a>
            <a class="nav_element tektur" href="#">Projects</a>
            <a class="nav_element tektur" href="#">Contacts</a>
        </div>

        <div class="nav-group">
            <button class="icon-btn">
                <LanguageSolid class="icon" />
            </button>
        </div>

    </nav>
</template>
<script setup>
import LanguageSolid from './icons/LanguageSolid.vue';


</script>
<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--smart-blue);
        box-shadow: 0 0 10px var(--steel-azure);
        margin: 0 auto;
        padding: 0 20px;
        height: 50px;
        width: 80%;
    }

    .nav_element {
        height: 50px;
        background-color: var(--steel-azure);
        transition: all .3s ease-out;
        text-decoration: none;
        color: white;
        font-size: 20px;
        padding: 10px 20px;
    }

    .nav_element:hover {
        padding: 10px 40px;
        background-color: var(--cool-steel);
        font-weight: 700;
    }

    .nav_element:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .nav_element:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .icon-btn {
        display: flex;
        height: 50px;
        width: 50px;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: transparent;
        fill: white;
        cursor: pointer;
    }

    .github-link {
        color: white;
        text-decoration: none;
        font-size: 30px;
    }
</style>