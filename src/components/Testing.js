import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const IMG_API = "https://image.tmdb.org/t/p/w500/";
const movie_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=702913c155a3e7036e088e1afbfdcc9d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate;";

const Testing = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(movie_API).then((response) => {
      setMovies(response.data["results"]);
    });
  }, []);

  const listMovies = movies.map((movie) => (
    <div>
      <h2 key={movie.id}>
        {movie.id}: {movie.original_title}
      </h2>
      <img src={IMG_API + movie.poster_path} alt="" />
    </div>
  ));

  console.log(movies);
  return <div>{listMovies}</div>;
};

export default Testing;
