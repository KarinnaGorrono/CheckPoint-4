import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";

function _drawWeather() {
  let weather = ProxyState.weathers
  let weathers = document.getElementById('weather')
  weathers.innerHTML = weather.Template

}

export class WeathersController {
  constructor() {
    this.getWeather()
    ProxyState.on('weathers', _drawWeather)
  }
  async getWeather() {
    try {
      await weathersService.getWeather()
    } catch (error) {
      console.error("Error From Weather Controller", error)
    }
  }
}