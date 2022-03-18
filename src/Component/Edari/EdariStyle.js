import React, { Component } from "react";
// import { FaTintSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class EdariStyle extends Component {
 
  render() {
    return (
      <Link
        to={"/Detail/" + this.props.product.id}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="container" style={{display:"flex"}} >
        
      

           
              <img
              id="styleservic"
              alt={this.props.product.tittle}
              width="400px"
                src={this.props.product.pic}
                className="rd-caimg-top" 
              />
           
             </div>
      </Link>
    );
  }
}
