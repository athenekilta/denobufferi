import { DB } from "../deps.js";
import { config } from "../config/config.js";

// const connectionPool = new Pool(config.database, 2);

// const executeQuery = async(query, ...params) => {
//   const client = await connectionPool.connect();
//   const start = Date.now();
//   try {
//       return await client.query(query, ...params);
//   } catch (e) {
//       console.log(e);  
//   } finally {
//       client.release();
//       const ms = Date.now() - start;
//       console.log(`(${ms} ms) ${query} [${[ ...params ]}]`)
//   }
  
//   return null;
// };

const db = new DB(config.database);

const exists = [...await db.query("SELECT name FROM sqlite_master WHERE type='table' AND name='times';")][0]
if(!exists){
    console.log("Initializing database")
    db.query("CREATE TABLE times ( id SERIAL PRIMARY KEY, time TEXT NOT NULL );")
}

const executeQuery = async(query, ...params) => {
    return [...await db.query(query, ...params )]
}

export { executeQuery };
