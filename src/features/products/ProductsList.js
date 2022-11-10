import { Row, Col } from "reactstrap";
import ProductsCard from "./ProductsCard";
import { selectAllProducts } from "./productsSlice";

const ProductsList = () => {
  const products = selectAllProducts();
  return (
    <Row>
      {products.map((product) => {
        return (
          <Col md="4" key={product.id}>
              <ProductsCard product={product} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ProductsList;
