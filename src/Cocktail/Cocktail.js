import React from "react";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import Item from "./Item";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Search";

const Cocktail = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/item/:id">
            <Item />
          </Route>
          <Route path="/">
            <Search />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Cocktail;
