import React from "react";
import { Productlist } from "../Component/product";
import MyApp from "../Component/product/off/MyApp";
import { ProductService } from "../Component/product";
export default class HomePage extends React.Component {
  state = { products: [] };

  fetchData() {
    ProductService.getProductsWithOff(this.props.location.search).then(
      (response) => this.setState({ products: response.data })
    );
  }
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
          <Productlist Products={this.state.products} />
        </div>
      </div>
    );
  }
}
