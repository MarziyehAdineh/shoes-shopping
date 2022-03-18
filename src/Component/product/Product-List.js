import React from "react";
// import { Link } from "react-router-dom";
import MyApp from "./off/MyApp";
import { Navbar } from "../Navbar";
// import { Sabtname } from "../../pages";
import { Product } from "./Product";
import NewColection from "./newcolection/NewColection";
import { Link } from "react-router-dom";
import NewColectionstyle from "./newcolection/NewColectionstyle";
export function Productlist(props) {
  return (
    <div className="container">
      <Navbar />

      <NewColection />
      <br />
      <hr />
      <div className="row ">
        {/* <label className="logo">shoes shoping</label> */}
        <br />
        {props.Products.map((item) => (
          <div className="col-4" key={item.id}>
            <Product data={item} />
          </div>
        ))}
      </div>
      <div
        className="col-3"
        style={{
          width: "100%",
          //  border: "solid gray",
          //  backgroundColor: "lightgray",
          //  borderRadius: "6px 35px 6px 35px",
          display: "flex",
        }}
      >
        <MyApp />
      
      </div>
    </div>
  );
}
