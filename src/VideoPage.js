import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ShareIcon from "@material-ui/icons/Share";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./VideoPage.css";
import moment from "moment";

function VideoPage(props) {
  const { title, description, views, timestamp } = props.location.state;
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, [id]);
  return (
    <div className="videoPage">
      <YouTube videoId={id} opts={opts} />
      <div className="videoPage__info">
        <div className="videoPage__left">
          <h4>{title}</h4>
          <p>
            {" "}
            {views} views . {moment(timestamp).format("MMM DD ,YYYY")}
          </p>
        </div>

        <div className="videoPage__right">
          <ThumbUpIcon />
          <ThumbDownIcon />
          <ShareIcon /> Share
          <PlaylistAddIcon />
          Save
          <MoreHorizIcon />
        </div>
      </div>
      <p className="videoPage__description">{description}</p>
    </div>
  );
}

export default VideoPage;
