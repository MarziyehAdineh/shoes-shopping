import React, { Component } from "react";
import { FaTintSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Time from "./tim";
import Timer from "./timer";
export default class MySlide extends Component {
  render() {
    return (
      <div
        id="product"
        className="card mt-5"
        style={{ borderRadius: "10PX", width: "260px", height: "390px" }}
      >
        <Timer/>
        <div className="container">
          <img
            src={this.props.product.pic}
            className="card-img-top"
            style={{ borderRadius: "4%", height: "195px" }}
          />
          <br />
          <h1
            className="card-title"
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            {this.props.product.title}
          </h1>
          <br />
          <div
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              textShadow: "unset",
              display: "flex",
              width: "50px",
              borderRadius: "5px",
              backgroundColor: "rgb(158, 78, 68)",
              color: "white",
            }}
          >
            <del>{this.props.product.priceOff}</del>
          </div>
          <div style={{ display: "flex", textIndent: "3px" }}>
            <p style={{ fontSize: "14px" }}>تومان</p>{" "}
            <p
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                textShadow: "unset",
              }}
            >
              {this.props.product.price}
            </p>
            <Link to={"/Detail/" + this.props.product.id} className="btn btn-primary">
              <span style={{ width: "40px", height: "20px", fontSize: "12px" }}>
                توضیحات بیشتر{" "}
              </span>
            </Link>
            <hr/>
           
          </div>
        </div>
      </div>
    );
  }
}
