import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div style={{height: '400px'}} className="ui active dimmer">
        <div className="ui big text loader">Loading...</div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <small>{video.snippet.publishTime.substring(0, 10)}</small>
        <br />
        <small>{video.snippet.publishTime.substring(11, 16)}</small>
        <hr />
        <h5 className="ui header">{video.snippet.channelTitle}</h5>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
