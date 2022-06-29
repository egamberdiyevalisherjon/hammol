import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import { Container } from "react-bootstrap";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-dark">
      <Container>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
