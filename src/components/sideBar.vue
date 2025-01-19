<template>
    <div class="sidebar">
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
        </ul>
    </div>
</template>

<script setup>

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