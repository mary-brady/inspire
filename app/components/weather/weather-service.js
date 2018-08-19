import Weather from '../models/Weather.js'


const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
const apiUrl = url + encodeURIComponent(url2);

// @ts-ignore
const weatherApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});


export default class WeatherService {

	getWeather(draw) {
		console.log('Calling the Weatherman')
		weatherApi()
			.then(function (res) {
				localStorage.setItem('weather', JSON.stringify(res.data))
				let fTemp = (res.data.main.temp - 273) * 1.8 + 32
				console.log(res.data)
			})
		// draw(weather);
	}
}