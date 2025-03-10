const BASE = 'http://localhost:4050'

const URL = {
    ROOT: () => BASE,
    ORDERS: () => `${BASE}/orders`,
    LOGIN: ()=> `${BASE}/signin`,
    REGISTER: ()=> `${BASE}/signup`,
}

const APIBASE = 'https://fakestoreapi.com'

export const API = {
    BASE: () => APIBASE,
    PRODUCTS: () => `${APIBASE}/products`,
    PRODUCTID: (id) => `${APIBASE}/products/${id}`,
    PRODUCTIDSEARCH: (param='asc') => `${APIBASE}/products?sort=${param}`,
    CATEGORY: ()=> `${APIBASE}/products/categories`
}

export default URL