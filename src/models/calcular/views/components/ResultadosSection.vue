<template>
    <div class="resultado">
        {{ props.resultado }}
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(['resultado']);
</script>

<style scoped>
    .resultado{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(128, 128, 255);
        padding: 10px 10px;
        color: #fff;
        border-radius: 5px;
    }
</style>