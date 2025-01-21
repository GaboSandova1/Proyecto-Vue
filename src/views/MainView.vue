<template>
    <Header></Header>
    <div class="container">
        <sideBar></sideBar>
        <div class="content">
            <Router-view></Router-view>

        </div>
    </div>
</template>

<script setup>
    import sideBar from '../components/sideBar.vue';
    import Header from '../components/header.vue';

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