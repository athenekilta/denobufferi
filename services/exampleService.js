import { executeQuery } from "../database/database.js";

const list = async() => {
  return await executeQuery("SELECT timestamp FROM event")
}

const add = async(time) => {
  await executeQuery("INSERT INTO event (timestamp) VALUES ( :time )", { time })
  return
}

export { list, add }
