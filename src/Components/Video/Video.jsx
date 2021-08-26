import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import Heading from "../Heading";
import GuideSteps from "./GuideSteps";
import { NavLink } from "react-router-dom";

export default function Video() {
  return (
    <div className="page-container">
      <Heading title="Video Guide" />
      <p className="text-info">
        Please watch video below created by Wim Hof where he decribed how his
        breathing method can impact your life. Also he telling ho to do it
        properly.
      </p>
      <YoutubeEmbed embedId={"nzCaZQqAs9I"} />
      <GuideSteps />
      <NavLink to="/assistant" className="link-btn">
        Use Assistant
      </NavLink>
    </div>
  );
}
