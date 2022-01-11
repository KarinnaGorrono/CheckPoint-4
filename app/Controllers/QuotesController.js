import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";

function _drawQuote() {
  let quote = ProxyState.quote
  let quoteElem = document.getElementById('quote')
  quoteElem.innerHTML = quote.Template

}

export class QuotesController {
  constructor() {
    this.getQuote()
    ProxyState.on('quote', _drawQuote)
  }
  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error("Error from Quote Controller", error)
    }
  }
}


