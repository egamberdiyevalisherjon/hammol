import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeCategory, changeName } from "../Store/actions/product";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get("/category");
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  function handleProductNameChange(e) {
    dispatch(changeName(e.target.value));
  }

  function handleProductCategoryChange(e) {
    if (e.target.value === "all") return dispatch(changeCategory(""));
    dispatch(changeCategory(e.target.value));
  }

  return (
    <Row className="justify-content-between py-5">
      <Col md={2}>
        <h1 className="text-info" onClick={() => navigate("/")}>
          HAMMOL
        </h1>
      </Col>
      <Col md={5}>
        <InputGroup className="mb-3" onChange={handleProductNameChange}>
          <FormControl placeholder="Search Product" />
          <Button variant="info">
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </Button>
        </InputGroup>
      </Col>
      <Col md={3}>
        <Form.Select onChange={handleProductCategoryChange}>
          <option>all</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </Form.Select>
      </Col>
    </Row>
  );
};

export default Navbar;
