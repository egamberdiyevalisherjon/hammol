import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        height={200}
        className="image-thumbnail"
        src={product.thumbnail}
      />
      <Card.Body>
        <Card.Title className="text-truncate">
          Title: {product.title}
        </Card.Title>
        <Card.Text className="text-truncate">
          Description: {product.description}
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => navigate(`/${product.id}`)}
          className="rounded-pill d-block w-50 mx-auto"
        >
          See more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
