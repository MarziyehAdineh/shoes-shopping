import React, { Component } from "react";
import { FaTintSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Time from "./tim";
import Timer from "./timer";

export default class MySlide extends Component {
  render() {
    return (
      <Link
        to={"/Detail/" + this.props.product.id}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            id="product"
            className="card mt-5"
            style={{
              borderRadius: "10PX",
              width: "230px",
              height: "350px",
              flexGrow: "0",
              flexShrink: "1",
              flexBasis: "220px",
            }}
          >
            <Timer />

            <div className="container">
              <img
                src={this.props.product.pic}
                className="card-img-top"
                style={{ borderRadius: "4%", height: "150px", display: "grid" }}
              />
              <br />
              <h1
                className="card-title"
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  display: "flex",
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
                  fontFamily: "sans-serif",
                }}
              >
                <del>{this.props.product.priceOff.toLocaleString()}</del>
              </div>
              <div style={{ display: "flex", textIndent: "3px" }}>
                <p style={{ fontSize: "14px" }}>تومان</p>{" "}
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    textShadow: "unset",
                    color: "black",
                    fontFamily: "sans-serif",
                  }}
                >
                  {this.props.product.price.toLocaleString()}
                </p>
                {/* <span style={{ width: "20%", height: "100px", fontSize: "12px" }}>
                توضیحات بیشتر
              </span>
            */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
