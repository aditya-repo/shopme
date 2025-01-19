const BASE = 'http://localhost'

const URL = {
    ROOT: () => BASE,
    ORDERS: () => `${BASE}/orders`
}

const APIBASE = 'https://fakestoreapi.com'

export const API = {
    PRODUCTS: () => `${APIBASE}/products`,
    PRODUCTID: (id) => `${APIBASE}/products/${id}`,
    PRODUCTIDSEARCH: (param='asc') => `${APIBASE}/products?sort=${param}`,
}

export default URL