import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/slice";
import { getProducts } from "../store/productSlice";

// import {addTemp} from '../store/slice'

function Products() {
  // const [data, setData] = useState(null);
  const { data, status } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return <h2>Loading....</h2>;
  }

  if (status === "error") {
    return <h2>Something went wrong! Try Again Later</h2>;
  }

  const addToCart = (e) => {
    dispatch(add(e));
    // dispatch(addTemp(e))
  };

  return (
    <>
      <h3>Products Store</h3>
      <div className="row">
        {data &&
          data.map((product) => (
            <div className="col-md-3">
              <Card style={{ width: "18rem" }}>
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ width: "100px", height: "130px" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => addToCart(product)} variant="primary">
                    Add to Cart
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
}

export default Products;
