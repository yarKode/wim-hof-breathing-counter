import React from "react";

import HeroTitles from "./HeroTitles";
import CtaBlock from "./CtaBlock";
import { TITLES } from "./../../settings";

export default function Home() {
  return (
    <div className="hero-bg">
      <div className="page-container">
        <HeroTitles title={TITLES.title} subtitle={TITLES.subtitle} />
        <CtaBlock />
      </div>
    </div>
  );
}
