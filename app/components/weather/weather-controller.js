import WeatherService from "./weather-service.js";
import Weather from "../models/Weather.js";

var weatherService = new WeatherService()

function drawWeather(weather) {
	let weatherElem = document.getElementById('weather')
	let template = ''
	template += `
		<div>
		<h1>Weather</h1>
		<p>${weather.name}</p>
		<p>${weather.temp}</p>
		<p>${weather.desc}</p>
		</div>
		`
	weatherElem.innerHTML = template
}
export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			drawWeather(weather)
			//What can you do with this weather object?
		})
	}
}
