import React from "react";

import { NavLink } from "react-router-dom";

export default function MobileMenu({ toggleMobMenu, mob }) {
  function testClickHandler() {
    console.log("should open menu");
  }
  return (
    <div className="mobile-menu" onClick={testClickHandler}>
      <ul className={!mob ? "nav-list" : ""}>
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
    </div>
  );
}
