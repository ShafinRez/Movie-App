import React from 'react'
import propTypes from 'prop-types';

const Movie = (props) => {

    return (
        <div className = "Movie">
            <h1>{props.name}</h1>
        </div>
    )
}

Movie.propTypes = {
    name: propTypes.string.isRequired
}

export default Movie
