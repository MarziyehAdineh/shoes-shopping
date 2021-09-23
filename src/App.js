import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './Component/Navbar';
import { Detail } from './pages';
import {BrowserRouter,Switch,Route}from "react-router-dom"
import HomePage from './pages/Home';
function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <div className="container">
        <BrowserRouter>
        <Switch>
          <Route  path="/">
          <HomePage/>
          </Route>
          <Route path="/Detail">
          <Detail/>
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
