import React, { Component } from "react";
// import { FaTintSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


export default class StyleServickhab extends Component {
 
  render() {
    return (
      <div >
       
      <Link
        to={"/Detail/" + this.props.Service.id}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="container">
        <div className="row">
      
        


            <div className="col-3" id="serviskhabstyle" style={{display:"flex",margin:"20px"}} >
              <img
              id="styleservic"
              alt={this.props.Service.tittle}
              width="400px"
                src={this.props.Service.pic}
                className="rd-caimg-top" 
              />
             </div>
             </div>
             </div>
      </Link>
      </div>
    );
  }
}
