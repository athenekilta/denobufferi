import * as exampleService from '../../services/exampleService.js'

const app = async({ render }) => {
  render('app.ejs')
}

export { app }
