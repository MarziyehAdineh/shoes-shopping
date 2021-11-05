import React from "react";
import MyApp from "./off/MyApp";
import { Product } from "./Product";
export function Productlist(props) {
  return (
    <div className="row">
      <div
        style={{
          border: "solid gray",
          backgroundColor: "lightgray",
          borderRadius: "6px 35px 6px 35px",
        }}
      >
        <MyApp />
      </div>
      {props.Products.map((item) => (
        <div className="col-3" key={item.id}>
          <Product data={item} />
        </div>
      ))}
    </div>
  );
}
