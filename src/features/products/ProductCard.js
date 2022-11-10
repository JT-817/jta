import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

const ProductCard = ({ product }) => {
    const {image, name, description, price, brand, rating, numReviews} = product;
  return (
    <Card className="product-card">
        <CardTitle><h3>{name}</h3></CardTitle> <hr />
        <CardImg src={image} /> <hr />
        <CardBody>
            <CardText>{description}</CardText>
        </CardBody>
    </Card>
  )
}

export default ProductCard