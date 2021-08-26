import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Step({ icon, content }) {
  return (
    <div className="guide-block-item">
      <div className="guide-block-item-img">
        <FontAwesomeIcon icon={icon} />
      </div>
      <p className="guide-block-item-desc">{content}</p>
    </div>
  );
}
