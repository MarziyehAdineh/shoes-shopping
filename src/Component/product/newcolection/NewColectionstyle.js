import React, { Component } from "react";
// import { FaTintSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Time from "./tim";
export default class NewColectionstyle extends Component {
  render() {
    return (
    //   <Link
    //     to={"/Detail/" + this.props.product.id}>
  
            <div className="container" >
              <img
             
              alt={this.props.product.title}
                src={this.props.product.pic}
                className="card-img-top"
                style={{  height: "350px", display: "grid",borderRadius:"2%"}}
              />
              </div>
  
   
    //   </Link>
    );
  }
}
