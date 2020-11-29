import { Avatar } from "@material-ui/core";
import React from "react";
import "./Video.css";
import moment from "moment";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
function VideoCard({ title, views, timestamp, channelImage, channel, image }) {
  return (
    <div className="videoCard">
      {/**image */}
      <img src={image} className="videoCard__thumbnail" alt="" />
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" src={channelImage} />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} views. {moment(timestamp).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
