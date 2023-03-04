import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios, { AxiosRequestConfig } from 'axios';
dotenv.config();

var query = "london";
var units = "metric";

const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + process.env.OPEN_WEATHER + "&units=" + units;

import { getWeather } from './api/weather.js';

const app: Express = express();

app.use(cors()); // allow CORS
app.use(express.json());

app.get("/weather", (req: Request, res: Response) => {
    axios.get(url)
        .then((response: any) => {
            let weather_data = response.data;

            var temp: number = weather_data.main.temp;
            var description: string = weather_data.weather[0].description;
            var icon: string = "https://openweathermap.org/img/wn/" + weather_data.weather[0].icon + "@2x.png";

            return res.send({
                status: weather_data.cod,
                temp: temp,
                description: description,
                wind: weather_data.wind.speed,
                icon: icon
            })
        })
        .catch(function (error: any) {
            console.log("Error: " + error);
        })
});

/* listen on port 3000 or the port specified in .env */
const PORT = process.env.SERVER_PORT || 3124;
app.listen(PORT, () => {
    console.log(`Proxy server running on ${PORT}`)
});