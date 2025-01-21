import { useWeatherStore } from '../stores/weatherStore';
import {getTemperatura} from '../helpers/getWeather.js';

export const useWeather = async() => {
    const temperatura = await getTemperatura();
    const weatherStore = useWeatherStore();
    weatherStore.temperatura = temperatura;
}