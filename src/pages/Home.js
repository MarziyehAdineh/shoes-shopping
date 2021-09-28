import React, { Component } from "react";
import { Productlist } from "../Component/product";
import Detail from "./Detail";
import { ProductService } from "../Component/product";
export default class HomePage extends React.Component {
  state = { Product: [] };
  componentDidMount() {
    ProductService.getProduct().then((Response) =>
      this.setState({ Product: Response.data })
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Productlist Product={this.state.Product} />
        </div>
      </div>
    );
  }
}
