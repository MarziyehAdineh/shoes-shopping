import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeAll extends Component {
  render() {
    return (
      <div>
      

        <div className="container" id="home">
          <div id="homestyle" className="responsive">
            <img
              id="imghome"
              height="450px"
              src="https://infinitychap.com/wp-content/uploads/2021/06/LW-1761-Copy.jpg"
            />
            <div
              className="col-5"
              id="nothome"
              // style={{ display: "grid", direction: "rtl" }}
            >
               <h5
          style={{
            fontFamily: "Nastaligh",
            textDecoration: " underline",
            fontSize: "50px",
            direction: "rtl",
            marginTop: "13px",
          }}
        >
          تولیدی مبل ایران چوب
        </h5>
              <Link to="/home">
                <button id="buttonhome" className="btn btn-outline-secondary  ">
                  برای بازدید از مدل ها کلیک کنید
                </button>
              </Link>
            </div>
          </div>
          {/* <div style={{display:"flex",marginTop:"-8%" }}>
            <div id="divhomeall"  className="card m-4"><span className="SpanHomeAll" > مبلمان اداری </span><img width="150px" height="auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBEiDgQsrdoRNjNBFHGm3K7uqdz1h5AeF6A&usqp=CAU"/></div>
            <div id="divhomeall"  className="card m-4"><span className="SpanHomeAll" > سرویس خواب </span><img width="150px" height="auto" src="https://www.offdecor.com/image/cache/media/product/6271/Untitled-2-900x700w.jpg"/></div>
            <div id="divhomeall"  className="card m-4"><span className="SpanHomeAll" >  مبل سلطنتی </span><img width="150px" height="auto" src="https://mobl.center/wp-content/uploads/2018/12/Webp.net-resizeimage-45.jpg"/></div>
            <div id="divhomeall" className="card m-4"><span className="SpanHomeAll" > مبل راحتی  </span><img width="150px" height="auto" src="https://deltapayam.com/wp-content/uploads/2021/08/533-00301_main-shot_01_gallway-3-seat-sofa-bed-forest-green-velvet-1-800x491.jpg?v=1629447647"/></div>-

            </div> */}
        </div>
      </div>
    );
  }
}
