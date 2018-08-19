import ImageService from "./image-service.js"

var imageService = new ImageService()

//Your ImageService is a global class what can you do here to instantiate it?


export default class ImageController {
    constructor() {
        this.getImage()
    }
    getImage() {
        imageService.getImage(function (image) {
            console.log(image)
        })
    }
}

