import react from "react";
import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { createStore } from "redux";
import { CommentList, CreateComment } from "../Component/comment";
import { addToCart, ProductService } from "../Component/product";
import { cartstore } from "../Component/product";
export class Detail extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    ProductService.getProuductById(id).then(({ data }) =>
      this.setState({ data })
    );

    this.unsubscribe = cartstore.subscribe(() => {
      console.log(cartstore.getState());
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  async submitComment(comment) {
    const response = await ProductService.addComment(
      this.state.data.id,
      comment
    );
    console.log("inja1: ", response);
    if (response.status === 200) {
      console.log("inja2");
      const { data } = await ProductService.getComments(this.state.data.id);
      console.log(data);
      this.setState({ data: { ...this.state.data, comments: data } });
    }
  }
  addToCartHandler() {
    cartstore.dispatch(addToCart(this.state.data));
  }

  render() {
    const data = this.state.data;
    if (!data) {
      return <div>loading...</div>;
    }
    return (
      <Fragment>
        <div className="row" width="400px" style={{ height: "300px" }}>
          <div className="col-5">
            <br />
            <br />
            <img alt={data.title} src={data.pic} width="100%" />
          </div>
          <div className="col-7">
            <h1 style={{ fontFamily: "sans-serif", color: "green" }}>
              {data.title}
            </h1>
            <br />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                direction: "rtl",
                textAlign: "end",
                fontFamily: "sans-serif",
              }}
            >
              <ul
                style={{
                  border: "2px white",
                  fontFamily: "sans-serif",
                  fontSize: "24px",
                }}
              >
                ویژگی های کفش :<li>نحوه بستن کفش :بندی </li>
                <li> :قابلیت ارتجاعی ،طبی</li>
                <li>زیره :کاهش فشار وارده</li>
                <br />
                <br />
                <span
                  style={{
                    fontFamily: "sans-serif",
                    color: "green",
                    fontSize: "30px",
                  }}
                >
                  {data.price}
                </span>
                <br></br>
                <button
                  onClick={this.addToCartHandler.bind(this)}
                  className=" mt-5 btn btn-primary btn-lg"
                >
                  افزودن به سبد خرید
                </button>
              </ul>
            </div>
            <div className="row">
              <CommentList comments={data.comments || []} />
            </div>
            <CreateComment onComment={this.submitComment.bind(this)} />
          </div>
        </div>
      </Fragment>
    );
  }
}
