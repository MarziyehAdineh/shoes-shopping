import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardIcon } from "../card";
class SlideOutMenuContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false,
    };
  }
  onChangeColor = () => {
    if (this.state.color == "black") {
      this.setState({ color: "red" });
    } else {
      this.setState({ color: "black" });
    }
  };
  render() {
    const { visible } = this.state;

    return (
      <div>
        <body>
          <div
            style={{ backgroundColor: "white" }}
            className=" lg:hidden xl:hidden xxl:hidden "
          >
            <div>
              <svg style={{ display: "none" }}>
                <symbol
                  id="expandMore"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path>
                </symbol>
                ,
                <symbol
                  id="cartOff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z"
                    clip-rule="evenodd"
                  ></path>
                </symbol>
                ,
                <symbol
                  id="registerationSignIn"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16 15h-2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2h2V7a4 4 0 00-4-4H6a4 4 0 00-4 4v10a4 4 0 004 4h6a4 4 0 004-4v-2zm6-4H9.414l2.293-2.293-1.414-1.414-4 4a1 1 0 000 1.414l4 4 1.414-1.414L9.414 13H22v-2z"
                    clip-rule="evenodd"
                  ></path>
                </symbol>
                ,
                <symbol
                  id="searchTrend"
                  xmlns="http://www.w3.org/2000/svg"
                  // width="50" height="50"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.015 9.105c.222.397.41.73.466.842.361.724.519 1.31.519 2.053a2 2 0 01-4 0l.003-4.557c0-.953-1.206-1.367-1.79-.613C5.087 9.572 4 11.906 4 13.889 4 18.365 7.578 22 12 22c4.422 0 8-3.635 8-8.111 0-2.968-2.45-6.78-7.295-11.598a1 1 0 00-1.6.262c-.807 1.615-.807 3.28 0 4.894.178.356.582 1.076.91 1.658zM7 12a4 4 0 108 0c0-1.078-.238-1.962-.73-2.947-.079-.156-.31-.569-.566-1.024a50.532 50.532 0 01-.81-1.476c-.273-.546-.404-1.079-.393-1.612C16.18 8.811 18 11.834 18 13.889 18 17.267 15.31 20 12 20s-6-2.733-6-6.111c0-.87.33-1.925 1-3.154V12z"
                    clip-rule="evenodd"
                  ></path>
                </symbol>
                ,
                <symbol
                  id="discount"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0  24 24"
                  // width="20px"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 4a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-.707-.293l-4-4A1 1 0 011 15V9a1 1 0 01.293-.707l4-4A1 1 0 016 4h16zm-1 2H6.414L3 9.414v5.172L6.414 18H21V6zm-6 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 12a3 3 0 11-6 0 3 3 0 016 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0zm12.848-3.47l-5 8-1.696-1.06 5-8 1.696 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </symbol>
                ,
                <symbol
                  id="amazing"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0  24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.112 2.234c.687.231 1.153.525 1.895 1.171l.536.474.109.09.142.104.653.42c.837.54 1.244.9 1.663 1.495.381.542.579 1 .794 1.841l.226.941.053.185.049.142.285.719c.36.914.483 1.457.483 2.184 0 .728-.124 1.27-.483 2.184l-.246.615-.08.22-.06.211-.227.941c-.215.842-.413 1.3-.795 1.843-.416.59-.822.95-1.646 1.483l-.67.431-.14.104-.176.147-.471.417c-.742.646-1.208.94-1.898 1.172-.688.23-1.206.272-2.224.199l-.687-.052-.197-.006-.086.001-.212.01-.586.047c-1.018.073-1.537.03-2.23-.201-.686-.231-1.152-.524-1.893-1.17l-.594-.522-.144-.111-.103-.072-.619-.395c-.821-.532-1.229-.894-1.643-1.483-.417-.593-.614-1.085-.855-2.085l-.146-.621-.061-.225-.06-.179-.285-.719C2.123 13.27 2 12.729 2 12c0-.727.124-1.27.483-2.184l.285-.717.082-.258.039-.147.146-.621.118-.46c.195-.707.39-1.131.737-1.624.414-.59.82-.95 1.643-1.483l.552-.352.153-.104.16-.123.124-.105.47-.417c.743-.646 1.209-.94 1.897-1.171.69-.232 1.209-.274 2.227-.2l.7.052.228.005.275-.013.564-.044c1.02-.074 1.539-.031 2.229.2zm-1.931 1.784l-.89.065c-.105.006-.2.008-.291.008l-.275-.007-.156-.009-.563-.044-.385-.024c-.514-.024-.767.012-1.094.122l-.108.039c-.35.132-.62.313-1.138.767l-.55.486-.155.125-.142.107-.23.158-.72.462c-.517.343-.733.545-.958.866-.23.326-.347.596-.51 1.247l-.193.815-.05.19-.05.17-.094.271-.345.87C4.061 11.287 4 11.594 4 12l.002.12c.012.35.082.65.282 1.18l.37.934.07.21.074.257.219.914c.162.65.28.92.51 1.247.247.352.485.564 1.121.973l.559.356c.118.077.204.138.296.207l.073.056.241.2.464.411c.569.5.839.67 1.241.805.404.135.694.159 1.484.1l.306-.025.555-.034.133-.002c.09 0 .186.003.291.008l.166.01.536.043c.79.059 1.08.035 1.478-.098.407-.138.678-.308 1.247-.807l.387-.344.212-.182.181-.142.186-.133.108-.073.721-.462c.518-.342.735-.546.96-.866.25-.357.367-.644.554-1.431l.091-.391c.032-.138.059-.245.084-.34l.075-.26.094-.273.345-.869c.223-.587.284-.894.284-1.299 0-.405-.061-.712-.284-1.299l-.37-.934-.095-.293-.075-.274-.149-.631-.098-.39c-.109-.402-.203-.64-.34-.865l-.115-.175c-.226-.32-.441-.523-.96-.866l-.624-.4a7.664 7.664 0 01-.255-.17l-.212-.157-.155-.126-.697-.613c-.42-.357-.669-.516-.977-.634l-.218-.074c-.322-.098-.603-.12-1.195-.081zM16 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-1.8-8.1l1.6 1.2-6 8-1.6-1.2 6-8zM11 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                    clip-rule="evenodd"
                  ></path>
                </symbol>
                <symbol
                  id="askQuestion"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.998 20.8l1.17 1.755a1 1 0 001.664 0l1.17-1.756A10.004 10.004 0 0022 11c0-5.523-4.477-10-10-10S2 5.477 2 11c0 4.79 3.389 8.863 7.998 9.8zm3.253-1.897a1 1 0 00-.677.433l-.574.861-.574-.86a1 1 0 00-.677-.434A8.002 8.002 0 014 11a8 8 0 1116 0 8.002 8.002 0 01-6.749 7.903zM10 9H8V8a3 3 0 013-3h2a3 3 0 013 3v.93a3 3 0 01-1.336 2.496l-1.219.812a1 1 0 00-.445.832V14h-2v-.93a3 3 0 011.336-2.496l1.219-.812A1 1 0 0014 8.93V8a1 1 0 00-1-1h-2a1 1 0 00-1 1v1zm3 6h-2v2h2v-2z"
                    clip-rule="evenodd"
                  ></path>
                </symbol>
                ,
                <symbol
                  id="pin"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9.611C4 5.391 7.59 2 12 2s8 3.39 8 7.611c0 2.818-1.425 5.518-3.768 8.034a23.496 23.496 0 01-2.514 2.322c-.517.413-.923.706-1.166.867L12 21.2l-.552-.366c-.243-.16-.65-.454-1.166-.867a23.499 23.499 0 01-2.514-2.322C5.425 15.129 4 12.428 4 9.61zm8.47 8.794c.784-.627 1.569-1.34 2.298-2.124C16.8 14.101 18 11.827 18 9.611 18 6.521 15.33 4 12 4S6 6.522 6 9.611c0 2.215 1.2 4.49 3.232 6.67A21.536 21.536 0 0012 18.769c.148-.111.305-.233.47-.364zM12 14a4.001 4.001 0 010-8 4.001 4.001 0 010 8zm0-2a2.001 2.001 0 000-4 2.001 2.001 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </symbol>
                ,
                <symbol
                  id="searchSearch"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0  24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.5 18a7.5 7.5 0 115.973-2.963l4.369 4.246-1.394 1.434-4.387-4.263A7.467 7.467 0 0110.5 18zm5.5-7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                    clip-rule="evenodd"
                  ></path>
                </symbol>
                ,
                <symbol
                  id="seller"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.5 3h-15a1 1 0 00-.959.715l-1.5 5.053A1 1 0 002 9.053V12a1 1 0 001 1h.006l.038 7.006A1 1 0 004.048 21l9.956-.035a1 1 0 00.996-1V13h4v8h2v-8a1 1 0 001-1V9.053a1 1 0 00-.041-.285l-1.5-5.053A1 1 0 0019.5 3zm.5 8V9.198L18.754 5H5.246L4 9.198V11h16zm-7 2H5.006l.033 5.997L13 18.968V13z"
                    clip-rule="evenodd"
                  ></path>
                </symbol>
              </svg>
              <div onClick={() => this.setState({ visible: false })}></div>
              <div className="flex justify-between " id="slide_nav">
                <p
                  id="slide_nav_button"
                  onClick={() => {
                    this.setState({ visible: !visible });
                  }}
                >
                  ☰
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{ width: "100px" }}
                    src="https://irw.ir/wp-content/uploads/2019/06/logo.png"
                  />
                </div>
                <i class="bi bi-question-square"></i>
              </div>

              <div>
                <div style={{ position: "relative" }}>
                  <ul
                    id="slide_menu"
                    style={{ display: visible ? "block" : "none" }}
                  >
                    <img
                      style={{ right: "20px", height: "10%", width: "400px" }}
                      src="https://i.pinimg.com/564x/e4/c3/ad/e4c3ad086e0b34965ccadde37a17e164.jpg"
                    ></img>
                    <hr className="hr"/>
                    <div  style={{ height: "52px" }}>
                      <li>
                        <Link
                          style={{
                            color: "black",
                            textDecorationLine: "none",
                            // fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          to="/Home"
                        >
                         صفحه اصلی
                        </Link>
                      </li>
                    </div>
                    <hr className="hr" />
                    <div  style={{ height: "52px" }}>
                      <li>
                        <Link
                          style={{
                            color: "black",
                            textDecorationLine: "none",
                            // fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          to="/Edari"
                        >
                         اداری
                        </Link>
                      </li>
                    </div>
                    <hr className="hr"/>
                    <div style={{ height: "52px" }}>
                      <li>
                        <Link
                          style={{
                            color: "black",
                            textDecorationLine: "none",
                            // fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          to="/Servickhab"
                        >
                         سرویس خواب
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div onClick={() => this.setState({ visible: false })}>
              <div className="flex" id="slide_search">
                <div className="searchboxRespansive">
                  <svg
                    style={{
                      marginRight: "-40",
                      width: "40",
                      height: "40",
                      fill: "gray",
                      paddingRight: "4px",
                    }}
                  >
                    <use href="#searchSearch"></use>
                  </svg>

                  <div style={{ visibility: "hidden" }}>kk</div>
                  <span
                    style={{
                      width: "80px",
                      color: "gray",

                      backgroundColor: "rgb(240,240,241)",
                    }}
                  >
                    جستجو
                  </span>
                </div>
                <div
                  className="login"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link
                    style={{
                      color: "black",
                      textDecorationLine: "none",
                      // fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className="activek"
                    to="/Sabtname"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-person-plus-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      <path
                        fill-rule="evenodd"
                        d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                    <div>ورود</div>
                  </Link>
                  <div style={{ visibility: "hidden" }}>kk</div>
                  <div>
                    <Link to="/Cart">
                      {" "}
                      <CardIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
        <br />
      </div>
    );
  }
}
export default SlideOutMenuContainer;
