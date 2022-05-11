import React from "react";
import { Link } from "react-router-dom";
import { CardIcon } from "../card";
import SlideOutMenuContainer from "./NavRespansive";
export const Navbar = () => {
  return (
    
      <div className="hidden  lg:block  xl:block xxl:block">
    <div className="topnav">
        <div>
          <Link to="/Cart">
            {" "}
            <CardIcon />
          </Link>
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
            ثبت نام / ورود 
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
          </Link>
        </div>
     
        <div className="login-container">
          <form action="/action_page.php">
          
            <Link
              style={{
                color: "black",
                textDecorationLine: "none",
                // fontWeight: "bold",
              }}
              to="/Servickhab"
            >
              سرویس خواب{" "}
              <i className="fas fa-bed" style={{ fontSize: "20px" }}></i>
            </Link>
            <Link
              style={{
                color: "black",
                textDecorationLine: "none",
                // fontWeight: "bold",
              }}
              to="/Edari"
            >
              اداری{" "}
              <i className="fas fa-chair" style={{ fontSize: "20px" }}></i>
            </Link>
                {/* <div style={{visibility:"hidden"}}>k</div> */}
        
            
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
              صفحه اصلی{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
              </svg>
            </Link>
             {/* <span style={{borderLeft:"1px solid gray"}}>
              
              </span> */}
          </form>
        </div>
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
      </div>
     
    </div>
  );
};
