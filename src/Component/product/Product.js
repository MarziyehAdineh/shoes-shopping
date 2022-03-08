import React from "react";
import { Link } from "react-router-dom";
// import StarRating from "../../pages/Star";

export const Product = ({ data }) => {
  return (
    <div className="container" >
      <Link
        to={"/Detail/" + data.id}
        style={{ textDecoration: "none", color: "black" }}
      >
      <div  id="product" style={{display:"flex", borderRadius:"10px"}}>
        <div style={{ width:"100px"}}>
        <div style={{display:"flex",margin:"6px"}}>
        <img alt={data.title} id="imgpro" src={data.pic} height="199px"style={{width:"290px"}} ></img>
      
        {/* <h5 id="textpro" style={{fontFamily:"sans-serif"}}>{data.title}</h5> */}
        
        </div>
        {/* <div style={{ display:"flex", textIndent: "3px" }}>
              <p style={{ fontSize: "25px",fontFamily:"sans-serif" }}>تومان</p>{" "}
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  textShadow: "unset",
                  color:"rgb(189, 100, 88)",
                  fontFamily: "sans-serif",
                }}
              >
                {parseInt(data.price).toLocaleString()}
              </p>
              </div> */}

        </div>

      </div>
        {/* <div
          id="product"
          className=" mt-5   "
          style={{ borderRadius: "10PX", width: "200px", height: "280px" }}
        >
          <div className="container">
            <img
              src={data.pic}
              className="card-img-top, img-fluid"
              style={{ borderRadius: "4%", height: "180px",width:"200px" }}
            />
            <h1
              className="card-title"
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                fontFamily: "sans-serif",

              }}
            >
              {data.title}
            </h1>
         
            <div style={{ display: "flex", textIndent: "3px" }}>
              <p style={{ fontSize: "14px" }}>تومان</p>{" "}
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  textShadow: "unset",
                  color:"rgb(189, 100, 88)",
                  fontFamily: "sans-serif",
                }}
              >
                {parseInt(data.price).toLocaleString()}
              </p>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </Link>
    </div>
  );
};
