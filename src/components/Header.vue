<template>
    <!-- The header container that displays the received message and the Weather component -->
    <div class="header">
        {{ mensajeRecibido }} <Weather></Weather>
    </div>
</template>

<script setup>
    // Import the Weather component and necessary functions from Vue
    import Weather from './Weather.vue';
    import { defineProps, ref, watch } from 'vue';

    // Define the props that the component will receive
    const props = defineProps(['mensaje']);

    // Create a reactive reference to store the received message
    const mensajeRecibido = ref(props.mensaje);

    // Watch for changes in the 'mensaje' prop and update 'mensajeRecibido' accordingly
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