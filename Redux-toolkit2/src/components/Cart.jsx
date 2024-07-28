import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/slice";

function Cart() {
  const productArr = useSelector((state) => state.cart.productArr);
  const dispatch = useDispatch();

  const removeItem = (e) => {
    dispatch(remove(e));
  };

  const TotalPrice = productArr.reduce((a, b) => a + b.price , 0);

  return (
    <>
      <h3>Your Cart</h3>
      <h5>Total Price: {TotalPrice}</h5>
      {productArr &&
        productArr.map((product) => (
          <div className="col-md-12">
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
                <Button
                  onClick={() => {
                    removeItem(product);
                  }}
                  variant="danger"
                >
                  Remove Item
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
    </>
  );
}

export default Cart;
