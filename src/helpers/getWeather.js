import axios from 'axios';

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=10.2354&longitude=-67.5911&hourly=temperature_2m&timezone=auto';

export const getTemperatura = async () => {
    const respuesta = await axios.get(API_URL);
    const nuevaTemperatura = respuesta.data.hourly.temperature_2m[0].value;
    return nuevaTemperatura;
}
