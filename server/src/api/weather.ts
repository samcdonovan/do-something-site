
import dotenv from 'dotenv';
import axios, { AxiosRequestConfig } from 'axios';
dotenv.config();

var query = "london";
var units = "metric";

const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + process.env.OPEN_WEATHER + "&units=" + units;

export function getWeather() {

    axios.get(url)
        .then((res: any) => {
            let weather_data = res.data;

            var temp: number = weather_data.main.temp;
            var description: string = weather_data.weather[0].description;
            var icon: string = "https://openweathermap.org/img/wn/" + weather_data.weather[0].icon + "@2x.png";

            return {
                status: weather_data.cod,
                temp: temp,
                description: description,
                wind: weather_data.wind.speed,
                icon: icon
            }
        })
        .catch(function (error: any) {
            console.log("Error: " + error);
        })
}