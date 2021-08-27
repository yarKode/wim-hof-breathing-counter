import React from "react";

export default function Humburger({ toggleMobMenu }) {
  return (
    <div className="hamburger" onClick={toggleMobMenu}>
      <div className="hamb-line"></div>
      <div className="hamb-line"></div>
      <div className="hamb-line"></div>
    </div>
  );
}
