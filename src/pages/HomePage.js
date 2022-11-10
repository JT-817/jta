import { Col, Container, Row } from "reactstrap";
import FeaturedList from "../features/FeaturedList";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Featured Item</h1>
          <FeaturedList />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
