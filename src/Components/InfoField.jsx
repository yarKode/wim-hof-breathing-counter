import React from "react";
function InfoField({ displayCount }) {
  return (
    <div className="square assistant-el">
      <p>{displayCount < 10 ? `0${displayCount}` : `${displayCount}`}</p>
    </div>
  );
}

export default InfoField;
