<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ nombre }}</h3>
        <h3>Email: {{ email }}</h3>
        <h2>Barra lateral</h2>
        <ul>
            <li>
                <router-link to="/Home">Inicio</router-link>
            </li>
            <li>
                <router-link to="/Contador">Contador</router-link>
            </li>
            <li>
                <router-link to="/listaDeTareas">Tareas</router-link>
            </li>
            <li>
                <router-link to="/registrar">Registrar</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { useRegistrarStore } from '@/models/registro/stores/registrarStore';
    import { ref, watch } from 'vue';

    const registrarStore = useRegistrarStore();
    const nombre = ref(registrarStore.nombre.value);
    const email = ref(registrarStore.email.value);
    watch(() => registrarStore.nombre, (newValue) => {
        nombre.value = newValue;
    });
    watch(() => registrarStore.email, (newValue) => {
        email.value = newValue;
    });


</script>

<style scoped>
    .sidebar {
        width: 250px;
        padding: 20px;
        background-color: #333;
        color: #fff;
        height: 100vh;
    }
    li {
        list-style: none;
        margin: 5px 0;
        padding: 0;
    }
    a {
        color: #fff;
        text-decoration: none;
        transition: 0.7s;
    }
    a:hover {
        color: rgb(128, 128, 255);
    }
</style>