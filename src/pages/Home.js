import React from "react";
import { Productlist } from "../Component/product";

import { ProductService } from "../Component/product";
export default class HomePage extends React.Component {
  state = { products: [] };

  fetchData() {
    ProductService.getProducts(this.props.location.search).then((response) =>
      this.setState({ products: response.data })
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.fetchData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Productlist Product={this.state.products} />
        </div>
      </div>
    );
  }
}
