<template>
    <div class="container">
        <section>
            <div class="welcome-card">
                <div class="console-container tiny5">
                    <div class="console-top"></div>
                    <div class="console-content">
                        <p><span class="console-time-text">{{ getTime() }}:</span> console.log(welcome());</p>
                        <p><span class="console-time-text">{{ getTime() }}:</span> Hello! Welcome to my Page!</p>
                    </div>
                    <div class="console-bottom"><p>{{ visitorStore.$state.visitorID }}: aboutMe()<span class="console-line">_</span></p></div>
                </div>
            </div>
        </section>
        <section>

        </section>
    </div>
</template>
<script setup>
import { useVisitorStore } from '@/stores/visitor';
import { onMounted } from 'vue';


const visitorStore = useVisitorStore();

const welcome = () => {
    return "Hello! Welcome to my Page!"
}

const getTime = () => {
    const now = new Date();

    return `[${now.getDay()}/${now.getMonth()}/${now.getFullYear()}] ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}

onMounted(() => {
    window.welcome = welcome;
})
</script>
<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        height: 90dvh;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
    }

    .welcome-card {
        display: flex;
    }

    .console-container {
        display: flex;
        flex-direction: column;
        width: 50%;
        font-size: 20px;
    }

    .console-top {
        height: 20px;
        background-color: var(--twilight-indigo);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .console-content {
        height: 300px;
        background-color: var(--prussian-blue-var1);
        padding: 20px 0 20px 20px;
        color: white;
    }

    .console-bottom {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: var(--prussian-blue-var1);
        color: var(--slate-grey);
        padding: 5px 20px;
        border-top: 3px solid var(--twilight-indigo);
    }

    .console-time-text {
        color: var(--cool-steel)
    }

    .console-line {
        opacity: 0;
        animation: line .5s linear infinite;
    }

    @keyframes line {
        0%, 49.9% { opacity: 1; }
        50%, 100% { opacity: 0; }
    }
    
</style>