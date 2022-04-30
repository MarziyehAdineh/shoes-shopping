import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../pages";
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
      
        
        </div>
       

        </div>

      </div>
      
      </Link>
    </div>
  );
};
