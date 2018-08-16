export default class Weather {
    constructor(data) {
        this.name = data.name
        this.temp = data.temp
        this.wind = data.wind
        this.main = data.main
        this.desc = data.description
    }
}