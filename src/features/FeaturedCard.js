import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const FeaturedCard = ({ item }) => {
  const { id, image, name, description } = item;
  return (
    <Link to={`products/${id}`}>
      <Card className="product-card">
        <CardImg src={image} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};

export default FeaturedCard;
