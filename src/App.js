
import React from "react";
import "./App.css";
import "./n.css";
import Servicekhab  from "./Component/sevicekhab/Sercivekhab";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Component/Navbar";
import { Detail, Sabtname } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { CartPage } from "./pages";
import Log from "./pages/Log";
import HomeAll from "./pages/HomeAll";
import Edari from "./Component/Edari/Edari";

function App() {
  return (
    <BrowserRouter>
    <div>
          <Switch>
            <Route exact path="/" component={HomeAll}/>
            <Route exact path="/home" component={HomePage}/>
            <Route path="/detail/:id" component={Detail} />
            <Route path="/Servickhab" component={Servicekhab} />
            <Route path="/Edari" component={Edari} />
            <Route path="/Cart" children={<CartPage/>} />
            <Route path="/Sabtname" children={<Sabtname/>} />
            <Route path="/Log" children={<Log/>} />
          </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
