<template>
    <!-- Mostrar la temperatura actual -->
    <h3>La temperatura actual es: {{ weatherStore.temperatura }}°C</h3>
</template>

<script setup>
    // Importar el composable useWeather
    import { useWeather } from '../composables/useWeather';
    // Importar el hook onMounted de Vue
    import { onMounted } from 'vue';
    // Importar el store useWeatherStore
    import { useWeatherStore } from '../stores/weatherStore';

    // Obtener una instancia del store
    const weatherStore = useWeatherStore();

    // Ejecutar la función useWeather cuando el componente se monte
    onMounted(() => {
        useWeather();
    });
</script>

<style scoped>

</style>