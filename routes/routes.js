import { Router } from "../deps.js";
import * as app from "./controllers/appController.js"

const router = new Router()

router
.get('/', app.app)

export { router }
