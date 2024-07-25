import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Products() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

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
                  <Button variant="primary">Add to Cart</Button>
                </Card.Footer>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
}

export default Products;
