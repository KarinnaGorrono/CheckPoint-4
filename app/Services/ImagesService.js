import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { sandboxApi } from "./AxiosService.js"

class ImagesService {

  async getImage() {
    const res = await sandboxApi.get('images')
    ProxyState.images = new Image(res.data)
  }

  async getAuthor() {
    const res = await sandboxApi.get('images/author')
    ProxyState.images = new Image(res.data)
  }
}

export const imagesService = new ImagesService()