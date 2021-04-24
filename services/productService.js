import { executeQuery } from '../database/database.js'

const productList = async () => {
    return await executeQuery('SELECT * FROM product')
}

export { productList }
