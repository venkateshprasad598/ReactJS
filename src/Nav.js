import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h1>Nav</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/item">Item</Link>
    </div>
  );
};

export default Nav;
