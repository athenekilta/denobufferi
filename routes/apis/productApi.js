import * as productService from '../../services/productService.js'

const products = async({response, request}) => {
    response.body = await productService.productList()
}

export { products }
