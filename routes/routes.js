import { Router } from "../deps.js";
import * as example from "./controllers/exampleController.js"

const router = new Router()

router
.get('/', example.index)

export { router }
