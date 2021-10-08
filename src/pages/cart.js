import React, { useState } from "react";
import { Component } from "react";
import { Cart } from "../Component/card";
import { cartstore } from "../Component/product";
export class CartPage extends Component {
  state = {};
  componentDidMount() {
    this.setState({ product: cartstore.getState() });
    this.unsubscribe = cartstore.subscribe(() =>
      this.setState({ product: cartstore.getState() })
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div className="mt-5">
        <Cart product={this.state.product} />
      </div>
    );
  }
}
