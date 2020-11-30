import React, { useState, useEffect, useContext } from "react";
import Carousel from "./Carousel";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import Axios from "./Axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { searchContext } from "./context";
const base_url = "https://image.tmdb.org/t/p/original";
const API_KEY = "3a8cbed0439996949f847342988e924a";

const requests = [
  `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  `movie/popular?api_key=${API_KEY}`,
];
const index = Math.floor(Math.random(requests) * 8);

function RecommendedVideos() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useContext(searchContext);

  const fetchData = async (endpoint) => {
    setLoading(true);
    await Axios.get(endpoint)
      .then((result) => {
        setLoading(false);
        setMovies(result.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    if (search) {
      console.log(search);
      if (search === "Trending") {
        fetchData(requests[0]);
      } else if (search === "Netflix Originals") {
        fetchData(requests[1]);
      } else if (search === "Top Rated") {
        fetchData(requests[2]);
      } else if (search === "Action") {
        fetchData(requests[3]);
      } else if (search === "Comedy") {
        fetchData(requests[4]);
      } else if (search === "Horror") {
        fetchData(requests[5]);
      } else if (search === "Romance") {
        fetchData(requests[6]);
      } else if (search === "Documentaries") {
        fetchData(requests[7]);
      } else if (search === "Popular") {
        fetchData(requests[8]);
      }
    } else {
      fetchData(requests[index]);
    }
  }, [search]);
  return (
    <div className="recommendedvideos">
      <Carousel />
      <div className="recommendedVideos__videos">
        {!loading && movies ? (
          movies.map((movie) => (
            <VideoCard
              key={movie.id}
              title={movie?.name || movie?.title || movie?.original_name}
              channel="MovieLover"
              channelImage={`${base_url}${movie.poster_path}`}
              views={movie.vote_count}
              timestamp={movie.release_date}
              image={`${base_url}${movie.backdrop_path}`}
              description={movie.overview}
              verified
            />
          ))
        ) : (
          <div className="loading__icon">
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
}

export default RecommendedVideos;
