export class Image {
  constructor(data) {
    this.url = data.largeImgUrl
    this.tags = data.tags || ''
    this.query = data.query || ''
    this.author = data.author || ''
  }

  get Template() {
    return `
    <h6 class="m-3"> Tags: ${this.tags} </h6>
    <h6 class="m-3"> Photographer: ${this.author}</h6>
    `
  }


}