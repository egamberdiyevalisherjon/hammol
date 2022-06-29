import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsList from "../Components/ProductsList";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";

const LIMIT = 12;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(0);

  const { name, category } = useSelector((state) => state.product);

  useEffect(() => {
    let unmounted = false;
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          `/product?limit=${LIMIT}&offset=${
            page * LIMIT
          }&name=${name}&category=${category}`
        );
        if (unmounted) return;
        setProducts(data.products);
        let p = [];
        for (let i = 0; i < Math.round(data.count / LIMIT); i++) {
          p.push(i);
        }
        console.log(data);
        setPages(p);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();

    return () => (unmounted = true);
  }, [page, category, name]);

  return (
    <main className="py-5">
      <ProductsList products={products || []} />
      {pages.length && (
        <Pagination className="mt-5">
          <Pagination.Prev onClick={() => page > 0 && setPage(page - 1)} />
          {pages.map((n) => {
            return (
              <Pagination.Item
                active={n === page}
                onClick={() => n !== page && setPage(n)}
                key={n}
              >
                {n + 1}
              </Pagination.Item>
            );
          })}
          <Pagination.Next
            onClick={() => page < pages.length - 1 && setPage(page + 1)}
          />
        </Pagination>
      )}
    </main>
  );
};

export default Home;
