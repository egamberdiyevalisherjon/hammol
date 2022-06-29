import React from "react";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";

const ProductsList = ({ products }) => {
  return (
    <Row className="g-5">
      {products.map((product) => (
        <Col key={product.id} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductsList;
