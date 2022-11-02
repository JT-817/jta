import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const productsCard = ({ product }) => {
  const { image, name, description, price } = product;
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <CardImg top width="100%" src={image} alt={name} />
      </Link>
      <CardBody>
        <Link to={`/product/${product.id}`}>
          <CardTitle tag="h5">{name}</CardTitle>
        </Link>
      </CardBody>
      <CardBody>
        <CardText>
          {description}
          <br />
          <strong>Price: </strong>
          {price}$
        </CardText>
      </CardBody>
    </Card>
  );
};

export default productsCard;
