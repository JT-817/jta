import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <Container className='bg-primary text-light' fluid>
        <Row className="text-center">
          <Col className="col-sm-6 col-md-4"><h5>Nav Links</h5></Col>
          <Col className="col-sm-6 col-md-4"><h5>Social</h5></Col>
          <Col className="col-sm-6 col-md-4"><h5>Contact</h5></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
