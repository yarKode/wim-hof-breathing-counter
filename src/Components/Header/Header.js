import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import Humburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobMenu, setMobMenu] = useState(() => false);

  function toggleMobMenu() {
    console.log("should toggle");
    setMobMenu(!mobMenu);
  }

  return (
    <header>
      <div className="menu">
        <div className="logo">
          <Link to="/">
            <p>WH Breathing</p>
          </Link>
        </div>
        <nav>
          {mobMenu && <MobileMenu mob={true} toggleMobMenu={toggleMobMenu} />}
          <Humburger toggleMobMenu={toggleMobMenu} />

          <MobileMenu mob={false} />
        </nav>
      </div>
    </header>
  );
}
