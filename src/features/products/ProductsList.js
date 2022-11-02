import { Row, Col } from "reactstrap"
import ProductsCard from "./ProductsCard"
import { PRODUCTS } from '../../app/data/products'

const ProductsList = () => {
  return (
    <Row>
        {PRODUCTS.map((product) => {
            return(
                <Col md='4' key={product.id}>
                    <ProductsCard product={product} />
                </Col>
            )
        })}
    </Row>
  )
}

export default ProductsList