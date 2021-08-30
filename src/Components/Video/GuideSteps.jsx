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
    stepNumber: 1,
    content:
      "Breathe In, into the belly, into the chest and Breathe Out. Repeat 30-40 times",
  },
  {
    key: uniqid(),
    icon: faLock,
    stepNumber: 2,
    content:
      "When ready to finish - make last one deep Breathe In, Exhale and Hold",
  },
  {
    key: uniqid(),
    icon: faStopwatch,
    stepNumber: 3,
    content:
      "Hold for 1 minute at least. If your hands and feet are tingling - that's okey",
  },
  {
    key: uniqid(),
    icon: faWind,
    stepNumber: 4,
    content: "When you feel the urge to breathe - Fully In and Hold",
  },
  {
    key: uniqid(),
    icon: faHourglassHalf,
    stepNumber: 5,
    content: "Hold 10-15 seconds. No more needed. When finish - Exhale",
  },
  {
    key: uniqid(),
    icon: faCheckCircle,
    stepNumber: 6,
    content: "If you wish to continue - Start new Round",
  },
];

export default function GuideSteps() {
  return (
    <div>
      <h3 className="steps-header">Breathing Method Steps:</h3>
      <div className="guide-block">
        {stepsContent.map(({ key, content, stepNumber }) => (
          <Step key={key} content={content} stepNumber={stepNumber} />
        ))}
      </div>
    </div>
  );
}
