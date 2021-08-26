import React from "react";

import { NavLink } from "react-router-dom";

export default function CtaBlock() {
  return (
    <div className="hero-cta-block">
      <div className="hero-cta">
        <h3>Try Free Breathing Assistant</h3>
        <NavLink to="/assistant" className="link-btn">
          Use Assistant
        </NavLink>
      </div>
      <div className="hero-cta">
        <h3>Watch a Quick Guide</h3>
        <NavLink to="/video" className="link-btn">
          Watch Video
        </NavLink>
      </div>
    </div>
  );
}
