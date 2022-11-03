import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container className="bg-primary text-light" fluid>
        <Row className="text-center">
          <Col className="col-sm-6 col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col className="col-sm-6 col-md-4">
            <h5>Social</h5>
          </Col>
          <Col className="col-sm-6 col-md-4">
            <h5>Contact</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
