<template>
    <div class="sidebar">
        <!-- Sidebar header -->
        <h2>Bienvenido</h2>
        <!-- Display user name from store -->
        <h3>Nombre: {{ registrarStore.nombre }}</h3>
        <!-- Display user email from store -->
        <h3>Email: {{ registrarStore.email }}</h3>
        <h2>Barra lateral</h2>
        <!-- Navigation links -->
        <ul>
            <li>
                <router-link to="/Inicio">Inicio</router-link>
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
            <li>
                <router-link to="/calcular">Calcular</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
    // Import the store for user registration data
    import { useRegistrarStore } from '@/models/registro/stores/registrarStore';

    // Initialize the store
    const registrarStore = useRegistrarStore();
</script>

<style scoped>
    .sidebar {
        width: 250px;
        padding: 20px;
        background-color: #333;
        color: #fff;
        height: 86.4vh;
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