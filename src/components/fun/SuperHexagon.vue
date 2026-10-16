<template>
    <div class="game_container">
        <div class="hex_container">
            <div class="hex_rotate">
                <div class="hex_pulse">
                    <div class="hex">
                        <div class="hex inner"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hex_container">
            <div class="hex_col">
                <div class="hex_col inner"></div>
            </div>
        </div>
        <div class="bg_container">
            <div class="hex_bg">
                <div class="hex_bg__rotate">
                    <div class="hex_bg first"></div>

                    <div class="hex_bg second"></div>


                    <div class="hex_bg third"></div>


                    <div class="hex_bg fourst"></div>


                    <div class="hex_bg fivest"></div>


                    <div class="hex_bg sixst"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.game_container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 1700px;
    max-height: 760px;
    overflow: hidden;
}

.hex_container {
    position: absolute;
    top: 50%;  
    left: 50%; 
    transform: translate(-50%, -50%);
    z-index: 5;
}

.hex:before, .hex:after {
    content:"";
    border-left: 104px solid transparent;
    border-right: 104px solid transparent;
    position: absolute;
}
.hex:before {
    top: -59px;
    border-bottom: 60px solid lime;
}
.hex:after {
    bottom: -59px;
    border-top: 60px solid lime;
}

.hex.inner {
    background-color:rgb(0, 150, 0);
    transform: scale(.9, .9);
    z-index:1;
}
.hex.inner:before {
    border-bottom: 60px solid rgb(0, 150, 0);
}
.hex.inner:after {
    border-top: 60px solid rgb(0, 150, 0);
}

.hex {
    margin: 40px 0 40px 0;
    width: 208px;
    height: 120px;
    background: lime;
    position: relative;
    transform: scale(0.8); /* hex специально внизу из за scale */
}

/* Hexagon BG */
.bg_container {
    position: absolute;
    top: 50%;  
    left: 50%; 
    transform: translate(-50%, -50%);
    border: 3px solid black;
}

.hex_bg.first {
    position: fixed;
    right: -0;
    border-left: 1730px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 1000px solid rgb(0, 180, 0);
}

.hex_bg.second {
    position: fixed;
    top: -870px;
    right: -0;
    border-top: 870px solid transparent;
    border-bottom: 870px solid transparent;
    border-left: 1500px solid rgb(0, 150, 0);
}

.hex_bg.third {
    position: fixed;
    top: -870px;
    left: -0em;
    border-top: 870px solid transparent;
    border-bottom: 870px solid transparent;
    border-right: 1500px solid rgb(0, 180, 0);
}

.hex_bg.fourst {
    position: fixed;
    left: -0;
    border-right: 1730px solid transparent;
    border-left: 0px solid transparent;
    border-bottom: 1000px solid rgb(0, 150, 0);
}

.hex_bg.fivest {
    position: fixed;
    bottom: -0;
    border-right: 1730px solid transparent;
    border-left: 0px solid transparent;
    border-top: 1000px solid rgb(0, 150, 0);
}

.hex_bg.sixst {
    position: fixed;
    top: -1000px;
    right: -0;
    border-left: 1730px solid transparent;
    border-right: 0px solid transparent;
    border-top: 1000px solid rgb(0, 180, 0);
}

/* Анимация */
.hex_bg__rotate, .hex_rotate {
    animation: rotate 3s linear infinite;
}
.hex_pulse {
    animation: pulse 2s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes pulse {
    0% {
        transform: scale(1, 1);
    }
    1% {
        transform: scale(1.4, 1.4);
    }
    10% {
        transform: scale(1, 1);
    }
    11% {
        transform: scale(1.1, 1.1);
    }
    20% {
        transform: scale(1, 1);
    }
    21% {
        transform: scale(1.1, 1.1);
    }
    30% {
        transform: scale(1, 1);
    }
    31% {
        transform: scale(1.4, 1.4);
    }
    40% {
        transform: scale(1, 1);
    }
    41% {
        transform: scale(1.1, 1.1);
    }
    50% {
        transform: scale(1, 1);
    }
    51% {
        transform: scale(1.4, 1.4);
    }
    60% {
        transform: scale(1, 1);
    }
    61% {
        transform: scale(1.1, 1.1);
    }
    70% {
        transform: scale(1, 1);
    }
    71% {
        transform: scale(1.4, 1.4);
    }
    80% {
        transform: scale(1, 1);
    }
    81% {
        transform: scale(1.1, 1.1);
    }
    90% {
        transform: scale(1, 1);
    }
    91% {
        transform: scale(1.1, 1.1);
    }
    100% {
        transform: scale(1, 1);
    }
}
</style>