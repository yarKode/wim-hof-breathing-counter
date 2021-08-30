import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./breathing-assistant.png";

import Humburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobMenu, setMobMenu] = useState(() => false);

  function toggleMobMenu() {
    setMobMenu(!mobMenu);
  }

  return (
    <header>
      <div className="menu">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
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
