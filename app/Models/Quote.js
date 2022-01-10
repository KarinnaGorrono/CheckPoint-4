export class Quote {
  constructor(data) {
    this.id = data.id || ''
    this.quote = data.content || ''
    this.author = data.author || ''
  }

  get Template() {
    return `
    <div class="reveal p-3">
    <h5 >"${this.quote}"</h5>
    <h5 class="hide"> -${this.author}</h5>
    `
  }
}