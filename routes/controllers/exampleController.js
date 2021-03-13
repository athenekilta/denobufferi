import * as exampleService from '../../services/exampleService.js'

const index = async({request, response, render, session}) => {
  const data = {}
  await exampleService.add(Date.now())
  data.list = await exampleService.list()
  render('index.ejs', { data })
}

export { index }
