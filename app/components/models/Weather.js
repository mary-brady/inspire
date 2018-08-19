export default class Weather {
    constructor(data) {
        this.name = data.name
        this.temp = data.main.temp
        this.desc = data.weather[0].main
    }
}