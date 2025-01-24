<template>
    <div>
        <h3>Propiedades Computadas</h3>
        <input type="text" v-model="valor" placeholder="Escribe un numero">
        <p>Resultado: {{ valorCalculado }}</p>
    </div>
    <!-- Muestra ResultadosSection si mostrarElemento es verdadero -->
    <ResultadosSection v-if="mostrarElemento" :resultado="valorCalculado"></ResultadosSection>
    <!-- Muestra un mensaje de error si el valor no es un número -->
    <div v-else-if="isNaN(valor)">
        <p>Debe ser un numero crack</p>
    </div>
    <!-- Muestra un mensaje por defecto si no se cumple ninguna condición anterior -->
    <div v-else>
        <p>Aqui no se muestra nada</p>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import ResultadosSection from './components/ResultadosSection.vue';
    
    // Define una referencia reactiva para el valor del input
    const valor = ref('');
    
    // Computa el valor multiplicado por 3
    const valorCalculado = computed(() => valor.value * 3);

    // Computa si el valor es mayor a 10 para mostrar el elemento
    const mostrarElemento = computed(() => {
        return valor.value > 10;
    });

</script>

<style scoped>
    
    div {
        padding: 10px;
        margin: 10px 0;
        border-radius: 5px;
    }

</style>