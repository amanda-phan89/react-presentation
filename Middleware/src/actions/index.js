import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const API_KEY = '8d133b2e54571caf2b86a2b71fba5a52';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
	return {
		'type': FETCH_WEATHER,
		'payload': request
	}
}