import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetailsImage from "../Components/ProductDetailsImage";
import ProductDetailsList from "../Components/ProductDetailsList";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let unmounted = false;
    const getProduct = async () => {
      const { data } = await axios.get(`/product/${id}`);
      if (unmounted) return;
      setProduct(data);
    };

    getProduct();

    return () => (unmounted = true);
  }, [id]);

  return (
    product && (
      <div className="py-5">
        <Row>
          <Col md={7}>
            <ProductDetailsImage images={product.images} />
          </Col>
          <Col md={5}>
            <ProductDetailsList product={product} />
          </Col>
        </Row>
      </div>
    )
  );
};

export default ProductDetails;
