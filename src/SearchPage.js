import React, { useEffect, useParams } from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from "./VideoRow";
import Fuse from "fuse.js";

function SearchPage() {
  useEffect(() => {}, []);

  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <VideoRow
        views="304M"
        channel="pasbancLove"
        timestamp="2hrs ago"
        description="New Pasbanc Features"
        title="Pasbanc Fever"
        image="https://images.unsplash.com/photo-1575739967915-f06fdc268a5b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}

export default SearchPage;
