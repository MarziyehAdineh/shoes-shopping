import react from "react";
import React, { Component } from "react";
import { ProductService } from "../Component/product";

export class Detail extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    ProductService.getProuductById(id).then(({ data }) =>
      this.setState({ data })
    );
  }
  render() {
    const data = this.state.data;
    if (!data) {
      return <div>loading...</div>;
    }
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "550px",
          borderRadius: "1%",
          margin: "12px",
          boxShadow: "revert",
        }}
      >
        <div className="row">
          <div className="col-5">
            <br />
            <br />
            <img alt={data.title} src={data.pic} width="150%" />
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
