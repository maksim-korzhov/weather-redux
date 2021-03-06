import axios from "axios";

//const API_KEY = "b1b15e88fa797225412429c1c50c122a1";
const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ua`;
    const request = axios.get(url); // request returns promise

    return {
        type: FETCH_WEATHER,
        payload: request
    }
};
