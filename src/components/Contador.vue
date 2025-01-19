<template>
    <h1>Bienvenido al contador:</h1>
    <p>{{ contador }}</p>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
    
</template>
  
  
<script setup>
  import { ref } from 'vue';
  const contador = ref(0);
  const incrementar = () => contador.value++;
  const decrementar = () => contador.value--;
  
</script>
  
<style scoped>
  
  h1 {
    color: #fff;
  }
  
  p{
    color: #fff;
    font-size: 2rem;
    text-align: center;
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
  