import React from "react";
import { ListGroup } from "react-bootstrap";

const ProductDetailsList = ({ product }) => {
  return (
    <ListGroup>
      <ListGroup.Item>Brand: {product.brand}</ListGroup.Item>
      <ListGroup.Item>Title: {product.title}</ListGroup.Item>
      <ListGroup.Item>Category: {product.category}</ListGroup.Item>
      <ListGroup.Item>Description: {product.description}</ListGroup.Item>
      <ListGroup.Item>
        Discount Percentage: {product.discountPercentage}%
      </ListGroup.Item>
      <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
      <ListGroup.Item>Rating: {product.rating}</ListGroup.Item>
      <ListGroup.Item>Stock: {product.stock}</ListGroup.Item>
    </ListGroup>
  );
};

export default ProductDetailsList;
