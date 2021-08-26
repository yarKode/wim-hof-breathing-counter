import React from "react";

export default function HeroTitles({ title, subtitle }) {
  return (
    <div className="hero-titles">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
