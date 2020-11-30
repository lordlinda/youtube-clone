import React from "react";
import "./VideoRow.css";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import moment from "moment";
import movieTrailer from "movie-trailer";
import { useHistory } from "react-router-dom";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
function VideoRow({
  views,
  channel,
  timestamp,
  description,
  title,
  image,
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
    <div className="videoRow">
      <img src={image} alt="" onClick={() => handleClick(title)} />

      <div className="videoRow__text">
        <h2>{title}</h2>
        <p className="videoRow__headline">
          {views} views. {moment(timestamp).fromNow()}
        </p>
        <p className="videoRow__channel">
          {channel} {verified && <CheckCircleOutlinedIcon />}
        </p>
        <p className="videoRow__description">{truncate(description, "60")}</p>
      </div>
    </div>
  );
}

export default VideoRow;
