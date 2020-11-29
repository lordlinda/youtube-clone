import React, { useContext } from "react";
import "./Carousel.css";
import { searchContext } from "./context";

function Carousel() {
  const { search, updateSearch } = useContext(searchContext);
  console.log(search);

  const handleFind = (value) => {
    updateSearch(value);
  };

  return (
    <div className="carousel">
      <p onClick={() => handleFind("Trending")}>Trending</p>
      <p onClick={() => handleFind("Netflix Originals")}>Netflix Originals</p>
      <p onClick={() => handleFind("Top Rated")}>Top Rated</p>
      <p onClick={() => handleFind("Action")}>Action Movies</p>
      <p onClick={() => handleFind("Comedy")}>Comedy Movies</p>
      <p onClick={() => handleFind("Horror")}>Horror Movies</p>
      <p onClick={() => handleFind("Romance")}>Romance Movies</p>
      <p onClick={() => handleFind("Documentaries")}>Documentaries</p>
      <p onClick={() => handleFind("Popular")}>Popular</p>
    </div>
  );
}

export default Carousel;
