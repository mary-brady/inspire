import QuoteService from "./quote-service.js";
import Quote from "../models/Quote.js";

let qs = new QuoteService

function drawQuote(quote) {
	let quoteElem = document.getElementById('quote')
	let template = ''
	template += `
		<div>
		<h1>Quote</h1>
		<p>${quote.quote}</p>
		<p>${quote.author}</p>
		`
	quoteElem.innerHTML = template
}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(function (quote) {
			drawQuote(quote)
		})
	}
}
