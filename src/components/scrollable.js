import React from "react";
import Movie from "./Movie";
import axios from "axios";
import Carousel, {
  slidesToShowPlugin,
  slidesToScrollPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useEffect, useState } from "react";
const movie_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=702913c155a3e7036e088e1afbfdcc9d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate;";

const Scrollable = ({ title }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(movie_API).then((response) => {
      setMovies(response.data["results"]);
    });
  }, []);

  const movieList = movies.map((movie) => (
    <Movie key={movie["id"]} data={movie} />
  ));
  // const movieList = movies.map((movie) => movie.id + " ");
  console.log(movies);

  return (
    <div className="Scrollable">
      <h2 className="MiddleTitle"> {title} </h2>
      <Carousel
        slides={movieList}
        plugins={[
          "arrows",
          "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 5,
            },
          },
          {
            resolve: slidesToScrollPlugin,
            options: {
              numberOfSlides: 5,
            },
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
              "arrows",
              "infinite",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
              {
                resolve: slidesToScrollPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          1080: {
            plugins: [
              "arrows",
              "infinite",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
              {
                resolve: slidesToScrollPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ],
          },
        }}
      ></Carousel>
    </div>
  );
};

Scrollable.defaultProps = {
  title: "TITLE MISSING",
};

export default Scrollable;
