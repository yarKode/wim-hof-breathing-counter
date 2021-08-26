import React, { useState } from "react";
import Iframe from "react-iframe";

import YouTube from "react-youtube";
import Spinner from "../Spinner";

export default function YoutubeEmbed({ embedId }) {
  const [videoStatus, setVideoStatus] = useState("loading");

  function loaderHandler(e) {
    console.log(e);
    setVideoStatus("loaded");
  }

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      modestbranding: 1,
      // https://developers.google.com/youtube/player_parameters
    },
  };

  return (
    <div className="video-responsive">
      {videoStatus === "loading" ? <Spinner /> : null}
      {/* <iframe
        width="600"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        onLoad={loaderHandler}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      /> */}
      <YouTube videoId={embedId} opts={opts} onReady={loaderHandler} />
    </div>
  );
}
