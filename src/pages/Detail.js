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
    // const off = this.props.match.params.id;
    // ProductService.getProuductById("off").then(({ data }) =>
    //   this.setState({ data })
    // )
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
        <div id="backdetail">
          <div id="detail">
            <div id="sabadkharid">
              <span style={{ color: "green", fontWeight: "bold" }}>
                موجود در انبار
                <img
                  width="30px"
                  src="https://www.clipartmax.com/png/middle/291-2916483_shop-icon-store-icon-white-png.png"
                />
              </span>
              <hr />
              <span style={{ color: "green", fontWeight: "bold" }}>
                ارسال رایگان{" "}
                <img
                  width="40px"
                  src="data:image/jpeg;base64,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"
                />
              </span>
              <hr />
              <div
                style={{ height:"20px",width:"70px", display: "flex", fontFamily:"sans-serif" }}
              >
               {/* <del><b>{parseInt(data.priceOff).toLocaleString()}</b> </del> */}

              </div>
              <div
                style={{ color: "#000", display: "flex", textIndent: "8px",fontFamily:"sans-serif" }}
              >
                <p> تومان </p>
                <span><b>{parseInt(data.price).toLocaleString()}</b> </span>
              </div>
              <button
                style={{ height: "40px" }}
                onClick={this.addToCartHandler.bind(this)}
                className=" mt-5 btn btn-danger btn-lg"
              >
                افزودن به سبد خرید
              </button>
            </div>
            <div style={{ direction: "rtl", display: "flex" }}></div>
            <div id="picdetail" style={{ direction: "rtl" }}>
              <br/>
              <p id="title">{data.title}</p>
              <div style={{  border: "1px", width: "350px",textIndent:"3px" }}>
                <br />
                <br />
                <br/>
                <br/>
                <ul>
                  ویژگی های کفش :<li>نحوه بستن کفش :بندی </li>
                  <li> :قابلیت ارتجاعی ،طبی</li>
                  <li>زیره :کاهش فشار وارده</li>
                </ul>
         
              </div>
            </div>
            <img alt={data.title} src={data.pic} width="35%"  id="pic1"/>
          
          </div>
          <div id="comment">
            <span style={{direction:"ltr",textIndent:"bold",fontSize:"20px"}} >نظرات کاربران</span>
<hr/>
            <CreateComment onComment={this.submitComment.bind(this)} />
            <CommentList comments={data.comments || []} />
          </div>
        </div>
      </Fragment>
    );
  }
}
