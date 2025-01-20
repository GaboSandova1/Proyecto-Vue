import * as yup from 'yup';

export const schema = yup.object().shape({
    nombre: yup.string().required('El nombre es requerido'),
    email: yup.string().email('El email no es válido').required('El email es requerido'),
});