<template>
  <h1>Bienvenido al contador:</h1>
  <!-- Muestra el valor actual del contador -->
  <p>{{ contador }}</p>
  <!-- Botones para incrementar o decrementar el contador -->
  <button @click="incrementar">Incrementar</button>
  <button @click="decrementar">Decrementar</button>
</template>

<script setup>
  import { ref } from 'vue';
  // Definición de la variable reactiva 'contador' inicializada en 0
  const contador = ref(0);
  // Función para incrementar y decrementar el valor del contador
  const incrementar = () => contador.value++;
  const decrementar = () => contador.value--;
</script>
  
<style scoped>
  
  h1 {
    color: #333;
  }
  
  p{
    color: #333;
    font-size: 2rem;
    margin: 20px;
  }
  
  button {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin: 10px;
  }
</style>
  