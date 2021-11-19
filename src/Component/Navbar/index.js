import React from "react";
import { Link } from "react-router-dom";
import { CardIcon } from "../card";
import { Search } from "./Search";
export const Navbar = () => {
  return (
    <div>
      <nav id="navz" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="fa fa-home" aria-current="page" href="#">
                  <img
                    width="50px"
                    src="https://img.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                  />

                  <Link to="/" style={{textDecoration:"none",color:"black",fontFamily:"sans-serif"}}  > صفحه ی اصلی</Link>
                </a>
              </li>
              <Link to="/Sabtname"style={{textDecoration:"none",color:"black"}} >  ثبت نام </Link>

              <li className="nav-item">
                <a className="fa fa-home">
                  <img
                    width="30px"
                    src="data:image/png;base64,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"
                  />
                  <Link to="/Cart"style={{textDecoration:"none",color:"black"}} >سبد خرید</Link>
                </a>
              </li>
              <div style={{display:"flex", marginRight:"2px",marginLeft:"2px"}}>
                <h1 id="title" style={{ marginLeft: "150px" }}>
                  shoes shoping
                </h1>
                <img
                  width="80px"
                  src="https://i.pinimg.com/originals/ba/5d/d4/ba5dd445504b80df283e90ebadb57d0b.gif"
                />
              </div>
            </ul>
            <Link to="Cart">
              <div style={{ marginRight: 30 }}>
                <CardIcon />
              </div>
            </Link>

            <Search />
          </div>
        </div>
      </nav>
    </div>
  );
};
