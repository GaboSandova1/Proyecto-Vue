<template>
    <div>
        <h2>Lista de Tareas:</h2>
        <!-- Input para agregar una nueva tarea -->
        <input type="text" v-model="nuevaTarea" @keyup.enter="agregarTarea"/>
        <ul>
            <!-- Itera sobre la lista de tareas y muestra cada una -->
            <li v-for="(tareas, index) in tareas" :key="index">
                {{ tareas }}
                <!-- Botón para eliminar una tarea específica -->
                <button @click="eliminarTarea(index)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Definición de las variables reactivas
const tareas = ref([]);
const nuevaTarea = ref('');

// Función para agregar una nueva tarea a la lista
const agregarTarea = () => {
    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value = '';
}

// Función para eliminar una tarea de la lista
const eliminarTarea = (index) => {
    tareas.value.splice(index, 1);
}
</script>

</script>

<style scoped>

</style>