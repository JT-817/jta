import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

const ProductsCard = ({ product }) => {
  const { id ,image, name, description, price } = product;
  return (
    <Link to={`${id}`}>
      <Card className="product-card">
        <CardImg top height="50%" className="h-50%" src={image} alt={name} />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
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
    </Link>
  );
};

export default ProductsCard;
