import React, { Component } from "react";

export function Detail() {
  const deta = {
    id: 1,
    title: "کفش مخصوص پیاده روی مردانه کد 700544",
    price: "140000تومان",
    pic: "https://m.media-amazon.com/images/I/71StEHAlKIL._AC_UY535_.jpg",
  };

  return (
    <div style={{ backgroundColor: "white",height: "570px" }}>
      <div className="row">
        <div className="col-5">
            <br/><br/><br/>
          <img src={deta.pic} width="150%" />
        </div>
        <div className="col-7">
          <h1 style={{ fontFamily: "sans-serif" ,color:"green"}}>{deta.title}</h1>
          <br/><br/><br/>
          <div style={{display:"flex", direction:"rtl",textAlign:"end", fontFamily: "sans-serif"}}>
      <ul style={{border:"2px white", fontFamily:"sans-serif",fontSize:"24px"}}>
         ویژگی های کفش :
        <li>نحوه بستن کفش :بندی </li>
      <li> :قابلیت ارتجاعی ،طبی</li>
      <li>زیره :کاهش فشار وارده</li>
      <br/><br/>
      <span style={{ fontFamily: "sans-serif", color: "green" ,fontSize:"30px"}}>{deta.price}</span>

      </ul>

      </div>
         
        </div>
      </div>

    </div>
  );
}
