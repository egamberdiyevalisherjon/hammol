import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

const ProductDetailsImage = ({ images }) => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <img
        src={images[index]}
        className="img-thumbnail product-details-image"
        alt="thumbnail"
      />
      <Row className="mt-5">
        {images.map((image, i) => (
          <Col key={image}>
            <img
              src={image}
              onClick={() => setIndex(i)}
              width={100}
              height={100}
              alt="thumbnail"
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductDetailsImage;
