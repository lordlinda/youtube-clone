import React from "react";
import "./VideoRow.css";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

function VideoRow({
  views,
  channel,
  timestamp,
  description,
  title,
  image,
  verified,
}) {
  return (
    <div className="videoRow">
      <img src={image} className="" alt="" />

      <div className="videoRow__text">
        <h2>{title}</h2>
        <p className="videoRow__headline">
          {views} . {timestamp}
        </p>
        <p className="videoRow__channel">
          {channel} {verified && <CheckCircleOutlinedIcon />}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
