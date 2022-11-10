import { useParams } from "react-router-dom"
import { Container,Row } from "reactstrap"
import ProductsCard from "../features/products/ProductsCard";
import { selectProductById } from "../features/products/productsSlice";


const ProductPage = () => {
  const { productId } = useParams();
  const product = selectProductById(productId);
  return (
    <Container>
      <Row>
        <ProductsCard product={product}/>
      </Row>
    </Container>
  )
}

export default ProductPage