import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeAll extends Component {
  render() {
    return (
      <div className="container" id="home">
        <div id="homestyle" class="responsive">
          <img
          id="imghome"
            width="720px"
            height="480px"
            src="https://parsstock.ir/600/10293/1574454-%D9%85%D9%88%DA%A9%D8%A7%D9%BE-%D9%81%D8%B6%D8%A7%DB%8C-%D8%AF%D8%A7%D8%AE%D9%84%DB%8C-%D8%B4%DB%8C%DA%A9-%D8%A7%D8%AA%D8%A7%D9%82-%D8%A8%D8%A7-%D9%85%D8%A8%D9%84-%D8%B1%D8%A7%D8%AD%D8%AA%DB%8C-%D9%88-%D8%AF%DA%A9%D9%88%D8%B1-%D8%B7%D9%84%D8%A7%DB%8C%DB%8C.jpg"
          />
          <div className="col-5" id="nothome" style={{display:"grid",direction:"rtl"}}>
         
            <Link to="/home">
              <button id="buttonhome" style={{ height: "60px",fontFamily:"sans-serif" }} >
                برای بازدید از مدل ها کلیک کنید
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
