import React, { Component } from "react";
// import { FaTintSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Time from "./tim";
export default class NewColectionstyle extends Component {
  render() {
  
    return (
      // <Link
      //   to={"/Detail/" + this.props.product.id}>
  
            <div style={{width:"100%", display:"flex",alignItems:"center",marginRight:"0px"}} >
              <Link
        to={"/Detail/" + this.props.product.id}
        style={{ textDecoration: "none", color: "black" }}
      >
              <img
             
              alt={this.props.product.title}
                src={this.props.product.pic}
                
                style={{ width:"100%",height:"100%",borderRadius:"2%"}}
              />
              </Link>
              </div>
  
   
    // </Link> 
    );
  }
}
