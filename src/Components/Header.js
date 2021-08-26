import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="menu">
        <div className="logo">
          <Link to="/">
            <p>WH Breathing Assist</p>
          </Link>
        </div>
        <nav>
          <div className="hamburger">
            <div className="hamb-line"></div>
            <div className="hamb-line"></div>
            <div className="hamb-line"></div>
          </div>
          <ul className="nav-list">
            <li className="menu_item">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/video">Video</NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/assistant">Assistant</NavLink>
            </li>
            <li className="menu_item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
