import React from "react";
const IMG_API = "https://image.tmdb.org/t/p/w500";

const Movie = ({ data }) => {
  // console.log(data)
  return (
    <div>
      <img src={IMG_API + data.poster_path} alt="" width="175" height="250" />
    </div>
  );
};

// Movie.propTypes = {
//     name: propTypes.string.isRequired
// }

export default Movie;
