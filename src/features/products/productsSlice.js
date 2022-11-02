import { PRODUCTS } from '../../app/data/products'

export const selectFeaturedProducts = () => {
    return PRODUCTS.find((product) => product.featured)
}