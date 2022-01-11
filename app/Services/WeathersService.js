import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxApi } from "../Services/AxiosService.js";

class WeathersService {

  async getWeather() {
    const res = await sandboxApi.get('weather')
    ProxyState.weathers = new Weather(res.data)
  }
}

export const weathersService = new WeathersService()