import { useParams } from "react-router-dom"
import { Col, Container,Row } from "reactstrap"
import ProductCard from "../features/products/ProductCard";
import { selectProductById } from "../features/products/productsSlice";


const ProductPage = () => {
  const { productId } = useParams();
  const product = selectProductById(productId);
  return (
    <Container>
      <Row>
        <Col>
        <ProductCard product={product}/>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductPage