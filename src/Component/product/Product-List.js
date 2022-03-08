import React from "react";
// import { Link } from "react-router-dom";
import MyApp from "./off/MyApp";
import { Navbar } from "../Navbar";
// import { Sabtname } from "../../pages";
import { Product } from "./Product";
import NewColection from "./newcolection/NewColection";
import NewColectionstyle from "./newcolection/NewColectionstyle";
export function Productlist(props) {
 
  return (

    <div className="container" >
            <Navbar/>
            <div >
<NewColection/>
</div>
<br/>
<hr/>
    <div className="row "   >
    {/* <label className="logo">shoes shoping</label> */}
      <br/>
       {props.Products.map((item) => (
        <div className="col-4" key={item.id} >  
       
          <Product data={item} />
        </div>
      ))} 
    
    </div>
    <div
     
     className="col-3"
       style={{
         width:"100%",
        //  border: "solid gray",
        //  backgroundColor: "lightgray",
        //  borderRadius: "6px 35px 6px 35px",
         display: "flex",

       }}
     >
       <MyApp />
       <div     

         style={{
           // borderRadius: "10PX",
           width: "200px",
           marginLeft: "30px",
           marginTop: "70px",
           height: "300px",
         backgroundRepeat:"cover",
         
         }}
       >
 
         <img
           alt="فروش ویژه"
           style={{width:"112px"}}
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmC3UdCsWa3huv2BWieVsFZDZlegWJYEwHpz5si6EoUdtqRk8n1IxlYKUccny5lFZ8Sc&usqp=CAU"
         />
       </div>
     </div>
    </div>
  );
}
