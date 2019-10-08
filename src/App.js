import React from "react";
import "./App.css";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import Temperature from "./components/pages/Temperature";
import CustomizeImage from "./components/pages/CustomizeImage";
import Celebrities from "./components/pages/Celebrities";

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <NavLink className="navbar__link" to="/">
          Home
        </NavLink>
        <NavLink className="navbar__link" to="/temperature">
          Temperature
        </NavLink>
        <NavLink className="navbar__link" to="/customize-image">
          Customize Image
        </NavLink>
        <NavLink className="navbar__link" to="/celebrities">
          Celebrities
        </NavLink>
      </nav>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/temperature" exact component={Temperature} />
          <Route path="/customize-image" exact component={CustomizeImage} />
          <Route path="/celebrities" component={Celebrities} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
