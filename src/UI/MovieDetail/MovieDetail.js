import React from 'react'
import PropTypes from 'prop-types'
import '../MovieDetail/MovieDetail.css'

const MovieDetail = ({ movie }) => {
  if (!movie) {
    return <div>Loading...</div>
  }

  return (
    <div className="movie-detail">
      <h2>
        {movie.Title} ({movie.Year})
      </h2>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="movie-detail-poster"
      />
      <p className="movie-detail-plot">{movie.Plot}</p>
    </div>
  )
}

MovieDetail.propTypes = {
  movie: PropTypes.object
}
export default MovieDetail
