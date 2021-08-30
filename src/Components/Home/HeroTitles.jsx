import React from "react";
import { TITLES } from "../../settings";

export default function HeroTitles() {
  return (
    <div className="hero-titles">
      <h1>{TITLES.title}</h1>
      <h2>{TITLES.subtitle}</h2>
    </div>
  );
}
