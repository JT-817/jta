import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

const productsCard = ({ product }) => {
  const { image, name, description, price } = product;
  return (
    <Card>
      <CardImg top width="100%" src={image} alt={name} />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>{description}<br/><strong>Price: </strong>{price}$</CardText>
      </CardBody>
    </Card>
  );
};

export default productsCard;
