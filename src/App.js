
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Component/Navbar";
import { Detail } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { CartPage } from "./pages";

import "./n.css";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <div className="container"> 
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/detail/:id" component={Detail} />
            <Route path="/Cart" children={<CartPage/>} />
          </Switch>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
