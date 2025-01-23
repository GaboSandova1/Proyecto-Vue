<template>
    <div class="header">
        {{ mensajeRecibido }} <Weather></Weather>

    </div>
</template>

<script setup>
    import Weather from './Weather.vue';
    import { defineProps, ref, watch } from 'vue';
    const props = defineProps(['mensaje']);
    const mensajeRecibido = ref(props.mensaje);
    watch(() => props.mensaje, (newValue) => {
        mensajeRecibido.value = newValue;
    });
    

</script>

<style scoped>
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #333;
        color: #fff;
        height: 5vh;
        padding: 10px 20px;
        top: 0;
        right: 0;
        left: 0;
    }

    h3{
        margin: 0;
    }
</style>