import React from 'react'
import propTypes from 'prop-types';
const Img_API = "https://image.tmdb.org/t/p/w1280"
const Movie = ({title, poster_path, overview, vote_average}) => {

    return (
        <div className = "Movie">
            <img src={Img_API + poster_path} alt ={title}/>
        </div>
    )
}

Movie.propTypes = {
    name: propTypes.string.isRequired
}

export default Movie
