import { Avatar } from "@material-ui/core";
import React from "react";
import "./Video.css";
import movieTrailer from "movie-trailer";
import moment from "moment";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import { useHistory } from "react-router-dom";

function VideoCard({
  title,
  views,
  timestamp,
  channelImage,
  channel,
  image,
  description,
  verified,
}) {
  const history = useHistory();
  const handleClick = (movie) => {
    movieTrailer(movie)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        const id = urlParams.get("v");
        if (id) {
          history.push(`/watch/${id}`, {
            title,
            views,
            timestamp,
            description,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="videoCard">
      {/**image */}
      <img
        src={image}
        onClick={() => handleClick(title)}
        className="videoCard__thumbnail"
        alt=""
      />
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" src={channelImage} />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>
            {channel} {verified && <CheckCircleOutlinedIcon fontSize="small" />}
          </p>
          <p>
            {views} views. {moment(timestamp).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
