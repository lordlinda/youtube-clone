import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from "./VideoRow";
import Fuse from "fuse.js";
import Axios from "./Axios";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const base_url = "https://image.tmdb.org/t/p/original";
function SearchPage() {
  const { text } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    await Axios.get(
      "/trending/all/week?api_key=3a8cbed0439996949f847342988e924a&language=en-US"
    )
      .then((res) => {
        const fuse = new Fuse(res.data.results, {
          keys: ["original_name", "name", "title"],
        });
        const results = fuse.search(text).map(({ item }) => item);
        setSearchResults(results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, [text]);

  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      {!loading ? (
        searchResults.map((result) => (
          <VideoRow
            key={result.id}
            views={result.vote_count}
            channel="@movieLover"
            timestamp={result.first_air_date || result.release_date}
            description={result.overview}
            title={result.original_name || result.original_title}
            image={`${base_url}${result.backdrop_path}`}
          />
        ))
      ) : (
        <div className="loading__icon">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default SearchPage;
