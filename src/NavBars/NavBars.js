import React from "react";
import "./Nav.css";

const NavBars = () => {
  return (
    <nav>
      <div className="nav">
        <h3>NavBar</h3>
        <button>Click</button>
      </div>

      <div className="nav__slider">
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
