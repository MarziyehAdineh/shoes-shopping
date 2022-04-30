import React from "react";
import MyApp from "./off/MyApp";
import { Navbar } from "../Navbar";
import { Product } from "./Product";
import NewColection from "./newcolection/NewColection";
import { Loading } from "../../pages";
export function Productlist(props) {
  // const data =props.data;
  // if (!data) {
  //   return <Loading/>
  // }else {
    
 
    
  return (
    <div className="container">
      <Navbar />

      <NewColection />
      <br />
      <hr />
      <div className="row ">
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
        
          display: "flex",
        }}
      >
        <MyApp />
      
      </div>
    </div>
    ///////////////////////////////////////////////////////
     /* <Navbar />

      <NewColection />
      <br />
      <hr />
      <div className="row ">
        {props.Products ? (
          <Loading />
        ) : (
          props.Products.map((item) => (
            <div className="col-4" key={item.id}>
              <Product data={item} />
            </div>
          ))
        )}
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
      </div> */
    /* </div> */
  )
      // }
}
