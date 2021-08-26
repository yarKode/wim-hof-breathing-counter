import React, { useState } from "react";

import Spinner from "../Spinner";

export default function YoutubeEmbed({ embedId }) {
  const [videoStatus, setVideoStatus] = useState(() => "loading");

  function loaderHandler(e) {
    e.preventDefault();
    setVideoStatus("loaded");
  }

  return (
    <div className="video-responsive">
      {videoStatus === "loading" ? <Spinner /> : null}
      <iframe
        width="600"
        height="480"
        src={`https://www.youtube-nocookie.com/embed/${embedId}?color='#5f61f0'&modestbranding=1`}
        frameBorder="0"
        onLoad={loaderHandler}
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
