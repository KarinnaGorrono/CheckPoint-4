import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js";

function _drawImage() {
  let image = ProxyState.images
  document.body.style.backgroundImage = `url(${image.url})`
  document.body.style.backgroundRepeat = `no-repeat`
  document.body.style.backgroundSize = `cover`

}


export class ImagesController {
  constructor() {
    this.getImage()
    ProxyState.on('images', _drawImage)

  }

  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error("Error from Image Controller", error)
    }
  }

  async getAuthor() {
    try {
      await imagesService.getAuthor()
    } catch (error) {
      console.error("error", error)
    }
  }
}