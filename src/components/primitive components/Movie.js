import React from 'react'
import PropTypes from 'prop-types'

const CUSTOM_PLACEHOLDER_IMAGE =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === 'N/A' ? CUSTOM_PLACEHOLDER_IMAGE : movie.Poster
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.string.isRequired
}

export default Movie
