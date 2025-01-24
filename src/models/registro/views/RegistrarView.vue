<template>
    <template>
        <!-- Contenedor principal del formulario de registro -->
        <div>
            <h2>Registro:</h2>
            <!-- Componente Form de vee-validate con esquema de validación y evento de envío -->
            <Form :validation-schema="schema" @submit="onSubmit">
                <!-- Campo de entrada para el nombre -->
                <div class="form">
                    <label for="nombre">Nombre:</label>
                    <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"/>
                    <ErrorMessage name="nombre"/>
                </div>
                <!-- Campo de entrada para el email -->
                <div class="form">
                    <label for="email">Email:</label>
                    <Field v-model="email" type="email" name="email" id="email" placeholder="Ingrese su Email"/>
                    <ErrorMessage name="email"/>
                </div>
                <!-- Botón para enviar el formulario -->
                <div class="form">
                    <button type="submit">Registrarse</button>
                </div>
            </Form>
        </div>
    </template>

    <script setup>
        // Importación de componentes y funciones necesarias
        import {Form, Field, ErrorMessage} from 'vee-validate';
        import {schema} from '../schemas/validationSchema';
        import { useRegistrarStore } from '../stores/registrarStore';
        import { ref } from 'vue';

        // Inicialización del store para manejar el registro
        const registrarStore = useRegistrarStore();

        // Variables reactivas para los campos del formulario
        const nombre = ref('');
        const email = ref('');

        // Función que se ejecuta al enviar el formulario
        const onSubmit = () => {
            // Guardar los datos del registro en el store
            registrarStore.guardarRegistro(nombre.value, email.value);
            console.log('Formulario enviado');
        }
    </script>
    <div>
        <h2>Registro:</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"/>
                <ErrorMessage name="nombre"/>
            </div>
            <div class="form">
                <label for="email">Email:</label>
                <Field v-model="email" type="email" name="email" id="email" placeholder="Ingrese su Email"/>
                <ErrorMessage name="email"/>
            </div>
            <div class="form">
                <button type="submit">Registrarse</button>
            </div>
        </Form>
    </div>
</template>



<script setup>
    import {Form, Field, ErrorMessage} from 'vee-validate';
    import {schema} from '../schemas/validationSchema';
    import { useRegistrarStore } from '../stores/registrarStore';
    import { ref } from 'vue';

    const registrarStore = useRegistrarStore();

    const nombre = ref('');
    const email = ref('');

    const onSubmit = () => {
        registrarStore.guardarRegistro(nombre.value, email.value);
        console.log('Formulario enviado');
    }

</script>

<style scoped>
    .form {
        margin: 10px 0;
    }
    label {
        display: block;
    }
    input {
        width: 100%;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
        max-width: 300px;
    }
    button {
        padding: 5px 10px;
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.5s;
    }
    button:hover {
        background-color: rgb(128, 128, 255);
    }
</style>