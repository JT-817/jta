import { PRODUCTS } from '../../app/data/products'

export const selectAllProducts = () => {
    return PRODUCTS
}

export const selectFeaturedProducts = () => {
    return PRODUCTS.find((product) => product.featured)
}

export const selectProductById = (id) => {
    return PRODUCTS.find((product) => product.id === parseInt(id));
}