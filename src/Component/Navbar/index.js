import React from "react";
import { Link } from "react-router-dom";
import { CardIcon } from "../card";
import { Productlist } from "../product";
import { Search } from "./Search";

export const Navbar = () => {
  return (
    // <div className="container">
    //   <div className="navbar" >
    //   <nav id="navz" className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="fa fa-home" aria-current="page" href="#">
    //               <Link
    //                 to="/"
    //                 style={{
    //                   textDecoration: "none",
    //                   color: "black",
    //                   fontFamily: "sans-serif",
    //                 }}
    //               >
    //                 <img
    //                   width="50px"
    //                   src="https://img.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
    //                 />
    //               </Link>
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="fa fa-home">
    //               <Link
    //                 to="/Cart"
    //                 style={{ textDecoration: "none", color: "black" }}
    //               >
    //                 <img
    //                   width="30px"
    //                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAACUlJSysrLCwsL7+/s6OjrPz8/l5eVycnLy8vL39/fb29vs7OzMzMwzMzN5eXlsbGy5ubl/f38PDw9RUVFnZ2cVFRVXV1fn5+eKiookJCTY2Nienp5CQkKurq5JSUmampooKCgcHBxeXl6lpaVFRUWHh4dF7E2EAAAFy0lEQVR4nO2d6VbiQBCFEySiJICyDDgIghvv/4bj6AwDUqR7qOV2cur77eHUNUt331qSZY7jOI7jOI7jOI7jtItq2KthiA5PgB95LVfo+Pjc1iscoePjE1CYd9EBsgkp3KADZBNSmDf+ZRNUuEBHyCWoMK/QITIJK/yBDpFJWGF+g46RR4TCO3SMPCIU5g/oIFnEKPyJDpJFjMK8j46SQ5TCLTpKDlEKc3SUHOIUvqHDZBCncIkOk8F9lMImn4THne9snwmFo+3J38FY9bjv9qe4ywpkPhnwJKIFxMDzHt7Q4cfAejOUU3T4MbDOrVt09DGsOQr7jbiIjxyJP9HRx8A68gzQ0cfwzlGY3aHDj4DnxzfhIjIzDnE7cigznsIKHX8Y7rn8FS0gCNfl7KEFhOA71TO0hAB8o3qIllDPji0wy0ZoEXVMJRzOLlpFHSsBgUlfxBcRgdkVWsd5hJyxItmLeC0jMGE7Q6y4IFU741VKYLJ2hmBpQYHWQiKalE7SzhBNZ6Z4Eu5ICsyyCVrPCdNCVuENWtAJT7IC07MzxBb7PanZGQrloGnZGUz7ieQRLeoIlTrClOwMnTLClOwMpQK0dC6i8GK/Jxk7Y65WfpbKSVjGnKEYo6V9oVm3lMZJWLP3Iwk7g5cRDZDESbinqTBboeXl+b2qwKw/RwtUbxnooAVOlAXi7YxSWyHaztBb7PdgL+JS2JwhgdoZJjXKSE9KdbH/R2RJuAZGbZ44O8Osy3OBUmjWH4gqsTFsD1xjFDIL8/8HjJ2hZc6QIOyMpf5+7QCEnSGeiakFUJ3xbCoQ0TFkPZijWBoLtB/pYG1nsJoqLsNW4K29QGM7AzEKoG8pEDMJYGeo0OJkf8qDnUBUC7lZx5D1Yr/HzM4YoxSGZrxJsYEJtDoJ62ZiarExhwXLZP8Xo+cQOPfH5jFUz8Scx+gpBE792ZgItD3ZH2HjRiGHxJkkg0eYDeknJifgkam9dozJtIUFUKBJd4KpA/wdg5PTDDtrUzuFOL8FOE+H0FXt1yKsF/cd9gAoNuRiP8kKEdDifkMv9vD/uyDXlECDQhczyJyFbe5Ll+KFUgjcIYtDmt0tmEq/h/a6Gz/P/ADSJW38OPMD6MW+6dPMDyE72Bo+B/sI2pwxLHRRh/TXoMccYegXKToqScjtTJsWe/JcKN9yjIRyZ1p1CckCjDathfSLBphYkIc2oO67luie0kwrTM6gXAmNlpe7QjawKn0zhQl0ySorTGBKjXbPhU3iF6kQ35Gv3jdDusGtUggfcKLf+4SeYW7Q3QW+Tw0U9rETTiw69Aag1jU7hVlhVFiKU/ixLJL5pzYpzMqVdVuQtcIPjd07yIW0/VZo2RtfGfPUolyz4ziO4zSE/k1VVTdaWfzB568DCwKrzuxrbzpfT+Sb5YeT9Vc3wHLWwVTTdo+/wzrdSu6mitVxKvbZvgOxR5zz5XLBxDdRRsYtenSn+qvMI1PS52vTdu5zR/xniZPN4JwNZFg7VzMwmS+xZuDd2qoEvM6kYX9fqnaiiNFVrE+wcYOo97hMystC+TXecIDQl6UsVsZgFpizwylDLX8bIRU1hFtjOW/1cMuf/qShiMGXjF8Pt/ypt66XYYGMGQ8xmTvtYt2YFPDlrbsxEwy0x5xEzaS5+NdjbHTt1ueo3OGlG5uYRyCfiuo5JSaGi7tL4uaiiuo5JSqGS9/ocUMalM/8qgrjiiCUB4GoKmzONWz0c9j+d2n710PdPU3M/0+796H9+9KYYQoMNyV8ttA3Mtp/Pgx/I5CzXpWh6g6NbwJ+p/0+Tfu9tsB9ys3P0OMM/mBxj35SY7cJeN7n7TYzgcp5i4dzeYtXy7kudO5pIZR7oh+DnciPR/N4ugWfCuYPT1f+a/sRn+P34xt0JZkDLlfHt+oaM4W26vx95ax3Q+lnpBju/tZaLzrAPtyiX/WqgdYboBh8/Ho/iblRjuM4juM4juM4juOg+QXKp2xKG8AhJQAAAABJRU5ErkJggg=="
    //                 />
    //               </Link>
    //             </a>
    //           </li>
    //           ّ
    //           <div style={{ margin: "2px", fontFamily: "sans-serif" }}>
    //             <img
    //               width="30px"
    //               src="data:image/png;base64,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"
    //             />
    //             <Link
    //               to="/Sabtname"
    //               style={{ textDecoration: "none", color: "black" }}
    //             >
    //               {" "}
    //               ثبت نام{" "}
    //             </Link>
    //             /
    //             <Link
    //               to="/Log"
    //               style={{ textDecoration: "none", color: "black" }}
    //             >
    //               {" "}
    //               ورود{" "}
    //             </Link>
    //           </div>
    //           <div
    //             style={{
    //               display: "flex",
    //               marginRight: "2px",
    //               marginLeft: "2px",
    //             }}
    //           >
    //             <h1 id="title" style={{ marginLeft: "200px", color: "black" }}>
    //               shoes shoping
    //             </h1>
    //             {/* <img
    //               width="80px" */}
    //             {/* // src="https://i.pinimg.com/originals/ba/5d/d4/ba5dd445504b80df283e90ebadb57d0b.gif" */}
    //             {/* /> */}
    //           </div>
    //         </ul>
    //         <Link to="Cart">
    //           <div style={{ marginRight: 30 }}>
    //             <CardIcon />
    //           </div>
    //         </Link>
    //         <span className="navbar-toggler-icon" style={{display:"none"}}></span>

    //         <Search />
    //       </div>
    //     </div>
    //   </nav>
    //   </div>
    // </div>
    <div>
      <div className="navresponse"></div>
      <nav className="nav2">

        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6k-WnmY7Fnzuk3u5d7jwEdOGf0GzUtfxypw&usqp=CAU" style={{width:"80px"}}></img>
        </label>
        <label className="logo">shoes shoping</label>
        <ul>
      
          <li>
            <Link className="active3" to="/Sabtname">ثبت نام
              {" "}
              {/* <img
                width="30px"
                src="data:image/png;base64,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"
              /> */}
            </Link>
          </li>

       
          <li>
            <Link to="/Log">ورود </Link>
          </li>
          <li>
            <Link to="/Cart">
              {" "}
              <CardIcon />
            </Link>
          </li>
        </ul>
      </nav>
      <div style={{padding:"2px",width:"390px",alignItems:"start"}}>
      {/* <Search /> */}
      </div>
    </div>
  );
};
