import React from "react";
import { Loading } from ".";
import { Productlist } from "../Component/product";
// import MyApp from "../Component/product/off/MyApp";
import { ProductService } from "../Component/product";
import Log from "./Log";
export default class HomePage extends React.Component {
  state = { products: [],
  };

 
  fetchData() {
    

    ProductService.getMobleman().then((response) =>
      this.setState({ products: response.data })
    );
  }

  async componentDidMount() {
    this.fetchData();
  
  }

  componentDidUpdate() {
    this.fetchData();
  }

  render() {
    // const data = this.state.data;
    // if (!data) {
    //   return  <Loading/>
    // }
    return (
      <div>
    
      <div className="container">
        <div className="row">
          <Productlist Products={this.state.products} />
        </div>
      </div>

      </div>
      
    );
  }
    
}
