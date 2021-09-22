import React from "react";
import "./Nav.css";
import { useState } from "react";
const NavBars = () => {
  const [isSlide, setIsSlide] = useState(false);

  return (
    <nav>
      <div className="nav">
        <h3>NavBar</h3>
        <button onClick={() => setIsSlide(!isSlide)}>
          {isSlide ? "Close" : "Show Nav"}
        </button>
      </div>

      <div className={isSlide ? "myNav myActive" : "myNav"}>
        <button onClick={() => setIsSlide(!isSlide)}>CLose</button>
        <ul className="nav__unorder">
          <li>
            <a href="#" className="nav__lists">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav__lists">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav__lists">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="nav__lists">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="nav__lists">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBars;
