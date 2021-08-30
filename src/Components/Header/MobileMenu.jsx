import React from "react";

import { NavLink } from "react-router-dom";

export default function MobileMenu({ toggleMobMenu, mob }) {
  function testClickHandler() {
    mob && toggleMobMenu();
  }

  return (
    <ul
      className={!mob ? "nav-list" : "mobile-menu-list"}
      onClick={testClickHandler}
    >
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
  );
}
