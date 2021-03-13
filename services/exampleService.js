import { executeQuery } from "../database/database.js";

const list = async() => {
  return await executeQuery("SELECT time FROM times")
}

const add = async(time) => {
  await executeQuery("INSERT INTO times (time) VALUES ( :time )", { time })
  return
}

export { list, add }
