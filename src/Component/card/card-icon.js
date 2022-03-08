import React, { Component } from "react";
import { cartstore } from "../product";

export class CardIcon extends Component {
  state = {};
  componentDidMount() {
    this.unsubscribe = cartstore.subscribe(() =>
      this.setState({ count: cartstore.getState().length })
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <img
          alt="سبد خرید"
          width="49px"
          src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-png-image-download-pngm-2.png"
        />
        {this.state.count > 0 && (
          <span
            style={{
              borderRadius: "60%",
              backgroundColor: " rgb(212, 57, 57)",
              color: "white",
              position: "absolute",
              marginTop: -2,
              marginLeft: -20,
              height: "23px",
              width: "22px",
              padding: "2px",
              textAlignLast: "center",
            }}
          >
            {this.state.count}
          </span>
        )}
      </div>
    );
  }
}
