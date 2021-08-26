import React from "react";
import uniqid from "uniqid";
import {
  faLock,
  faStopwatch,
  faWind,
  faCheckCircle,
  faHourglassHalf,
  faLungs,
} from "@fortawesome/free-solid-svg-icons";
import Step from "./Step";

const stepsContent = [
  {
    key: uniqid(),
    icon: faLungs,
    content:
      "Breathe in, into the belly, into the chest and Breathe out. Like a wave",
  },
  {
    key: uniqid(),
    icon: faLock,
    content:
      "When ready to finish - make last one deep Breathe In and on Exhale - stop",
  },
  { key: uniqid(), icon: faStopwatch, content: "Hold for 1 minute at least." },
  {
    key: uniqid(),
    icon: faWind,
    content:
      "Continue to hold until you feel the urge to breathe. When you are ready - Fully In, Hold",
  },
  {
    key: uniqid(),
    icon: faHourglassHalf,
    content: "Hold 10-15 seconds. No more needed. When finish - Exhale",
  },
  {
    key: uniqid(),
    icon: faCheckCircle,
    content: "Hold 10-15 seconds. No more needed. When finish - Exhale",
  },
];

export default function GuideSteps() {
  return (
    <div className="guide-block">
      {stepsContent.map(({ key, icon, content }) => (
        <Step key={key} icon={icon} content={content} />
      ))}
    </div>
  );
}
