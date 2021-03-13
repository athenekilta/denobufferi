import * as exampleService from '../../services/exampleService.js'

const index = async({request, response, render, session}) => {
  const data = {}
  data.list = await exampleService.list()
  data.time = new Date().toISOString()
  await exampleService.add(data.time)
  render('index.ejs', { data })
}

export { index }
