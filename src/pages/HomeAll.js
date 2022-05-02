import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class HomeAll extends Component {
  render() {
    return (
      <div className="vsc-initialized">
        <div className="main" >
          <div className="home1">
            <div className="bgimg">
              <div className="topleft">
                {/* <p>Logo</p> */}
              </div>
              <div className="middle">
                <div style={{width:"400px",height:"60px",borderRadius:"5px", boxShadow: " white 0px 50px 100px -20px, white 0px 30px 60px -30px, white 0px -2px 6px 0px inset" , fontFamily:"BYekan"}}>
                <h1 > تولیدی مبل ایران چوب</h1>
                {/* <br /> */}
                </div>
                <hr style={{border:"1px solid white",width:"400px"}}/>
                <Link to="/home">
                <button style={{width:"150px", height:"50px", backgroundColor:"white",color:"black",border:"none",borderRadius:"5px", boxShadow: " black 0px 50px 100px -20px, black 0px 30px 60px -30px, black 0px -2px 6px 0px inset",fontFamily:"BYekan" }}>
                  لطفا کلیک کنید
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
