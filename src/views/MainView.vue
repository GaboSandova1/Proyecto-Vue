<template>
    <!-- Header component with a prop binding to 'texto' -->
    <Header :mensaje="texto"></Header>
    <div class="container">
        <!-- Sidebar component -->
        <sideBar></sideBar>
        <div class="content">
            <!-- Input field bound to 'texto' -->
            <input type="text" v-model="texto" placeholder="Escribe algo">
            <!-- Display the value of 'texto' -->
            {{ texto }}
            <!-- Router view for nested routes -->
            <Router-view></Router-view>
        </div>
    </div>
</template>

<script setup>
    import sideBar from '../components/sideBar.vue';
    import Header from '../components/Header.vue';
    import { ref } from 'vue';
    // Reactive reference for the input text
    const texto = ref('');
</script>

<style scoped>
    .container {
        display: flex;
        height: auto;
        background-color: #f1f1f1;
    }

    .content {
        flex: 1;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>