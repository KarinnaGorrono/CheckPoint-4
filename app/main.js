import { ClockController } from "./Controllers/ClockController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";
import { TodoController } from "./Controllers/TodoController.js";

class App {

  clockController = new ClockController()
  imagesController = new ImagesController()
  quotesController = new QuotesController()
  weathersController = new WeathersController()
  todoController = new TodoController()


}

window["app"] = new App();
