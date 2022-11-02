import { Col, Row } from "reactstrap";
import { selectFeaturedProducts } from "./productsSlice";
import FeaturedCard from "./FeaturedCard";

const FeaturedList = () => {
  const items = [selectFeaturedProducts()];
  return (
    <Row>
      {items.map((item, idx) => {
        return (
          <Col key={idx}>
            <FeaturedCard item={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default FeaturedList;
