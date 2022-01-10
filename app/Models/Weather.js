export class Weather {
  constructor(data) {
    this.id = data.id
    this.fahr = Math.floor((data.main.temp - 273) * (9 / 5) + 32)
    this.celsius = Math.floor(data.main.temp - 273)
    this.weather = data.weather[0].description || ''
  }

  get Template() {
    return `<h4 class="text-end mt-5 pe-2">${this.fahr}°F / ${this.celsius}°C</h4>
    `
  }
}

