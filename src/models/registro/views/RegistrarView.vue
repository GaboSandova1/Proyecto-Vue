<template>
    <div>
        <h2>Registro:</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"/>
                <ErrorMessage name="nombre"/>
            </div>
            <div class="form">
                <label for="email">Email:</label>
                <Field type="email" name="email" id="email" placeholder="Ingrese su Email"/>
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

    const onSubmit = () => {
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