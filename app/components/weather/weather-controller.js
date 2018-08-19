import WeatherService from "./weather-service.js";
import Weather from "../models/Weather.js";

var weatherService = new WeatherService()
const weatherApp = document.getElementById('weather')

// function draw(weather) {
// 	let template = ''
// 	weather.forEach(weather => {
// 		template += `
// 		<p>${weather.name}</p>
// 		<p>${weather.main.temp}</p>
// 		<p>${weather.weather.description}</p>
// 		`
// 	})
// 	weatherApp.innerHTML = template
// }
export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather(draw) {
		weatherService.getWeather(weather => {

			//What can you do with this weather object?
		})
	}
}
