import Quote from '../models/Quote.js'

let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
let apiUrl = url + encodeURIComponent(url2);
//Do Not Edit above we have to go through the bcw-getter to access this api


// @ts-ignore
const quoteApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});



export default class QuoteService {
	getQuote(draw) {
		quoteApi().then((res) => {
			let quotes = new Quote(res.data)
			draw(quotes)
		})
	}
}
