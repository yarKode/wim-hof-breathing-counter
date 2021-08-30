import React from "react";

export default function Step({ content, stepNumber }) {
  return (
    <div className="guide-block-item">
      <div className="guide-block-item-img">
        {/* <FontAwesomeIcon icon={icon} /> */}
        <span className="step-number">{stepNumber}</span>
      </div>
      <p className="guide-block-item-desc">{content}</p>
    </div>
  );
}
