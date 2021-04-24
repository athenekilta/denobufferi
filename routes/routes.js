import { Router } from "../deps.js";
import * as app from "./controllers/appController.js"
import * as product from './apis/productApi.js'

const router = new Router()

router
  .get('/', app.app)
  .get('/api/products', product.products)

export { router }
