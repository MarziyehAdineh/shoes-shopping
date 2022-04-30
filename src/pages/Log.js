import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Component/Navbar";
import LoginGoogle from "./LoginGoogle";
export default class Log extends Component {
  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }
  render() {
    console.warn(this.state.showPassword);
    return (
      <div className="container22">
        <div>
             {/* <Navbar/> */}
          <div>
            <div id="box">
              <div>
                <img
                alt="log in"
                  width="37%"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06ROdyxo4RXXIefo6uqHm3JvL4FTq7dgKLw&usqp=CAU"
                />
                <br />
                <h4>
                  <b> ورود/ثبت نام</b>
                </h4>
                <br />
                <div id="fields">
                  <input type="username" placeholder=""></input>
                  <label for="">نام کاربری</label>
                  <input
                    type={this.state.showPassword ? "text" : "password"}
                    placeholder=""
                  ></input>
                  <label for="">رمز عبور</label>
                  <svg
                    onClick={() =>
                      this.setState({ showPassword: !this.state.showPassword })
                    }
                    id="eye"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye-slash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                  </svg>
                </div>
                <div
                  className="link"
                  style={{
                    fontFamily: "sans-serif",
                    padding: "1px",
                    textAlign: "right",
                    marginBottom: "13px",
                    marginRight: "10px",
                  }}
                >
                  <Link to="/">فراموش کردن رمز عبور</Link>
                  <br />

                  <br />
                </div>
              </div>
              <div>
                <input
                  type="submit"
                  id="btn-login"
                  className="btn-btn-denger"
                  value="ورود"
                  style={{ fontFamily: "sans-serif", textIndent: "bold" }}
               required />
                <br />
                <br />
                <div
                  style={{
                    marginBottom: "17px",
                    display: "flex",
                    textIndent: "5px",
                    fontFamily: "sans-serif",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LoginGoogle />/
                  <Link to="./sabtName">
                    <b>ثبت نام</b>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
