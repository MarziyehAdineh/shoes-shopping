import React from "react";
import { Link } from "react-router-dom";
import MyApp from "./off/MyApp";
import { Sabtname } from "../../pages";
import { Product } from "./Product";
export function Productlist(props) {
  return (
    <div className="bcontainer">
    <div className="row">
      <div
        style={{
          border: "solid gray",
          backgroundColor: "lightgray",
          borderRadius: "6px 35px 6px 35px",
          display: "flex",

          // width: "4000px",
        }}
      >
        <MyApp />
        <div
          style={{
            // border:"solid",
            // borderRadius: "10PX",
            width: "200px",
            marginLeft: "30px",
            marginTop: "70px",
            height: "300px",
          backgroundRepeat:"cover",
          
          }}
        >
          <img
            alt="فروش ویژه"
            style={{width:"112px"}}
            src="https://www.hiibashop.com/wp-content/uploads/2020/05/DAD-min.png"
          />
        </div>
      </div>
      {props.Products.map((item) => (
        <div className="col-3" key={item.id}>
          <Product data={item} />
        </div>
      ))}
    
    </div>
    </div>
  );
}
