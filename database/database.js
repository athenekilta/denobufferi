import { DB } from "../deps.js";
import { config } from "../config/config.js";

const db = new DB(config.database);

[ // Database initialization
  `CREATE TABLE IF NOT EXISTS customer (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    timestamp INTEGER NOT NULL,
    security INTEGER,
    pin_code TEXT,
    tg_2fa TEXT,
    deleted INTEGER
  )`,
  `CREATE TABLE IF NOT EXISTS event (
    id INTEGER PRIMARY KEY,
    timestamp INTEGER NOT NULL,
    mp_id TEXT,
    price INTEGER,
    quantity INTEGER,
    customer_id INTEGER,
    product_id INTEGER,
    FOREIGN KEY (customer_id) REFERENCES customer (id),
    FOREIGN KEY (product_id) REFERENCES product (id)
  )`,
  `CREATE TABLE IF NOT EXISTS product (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price INTEGER,
    qty INTEGER DEFAULT 0,
    deleted INTEGER
  )`,
  `CREATE TABLE IF NOT EXISTS config (
    key TEXT UNIQUE,
    value TEXT
  )`
].forEach((q) => { db.query(q) })

const executeQuery = async(query, ...params) => {
  return [...await db.query(query, ...params ).asObjects()]
}

export { executeQuery };
