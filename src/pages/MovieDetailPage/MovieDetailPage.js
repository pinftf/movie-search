import React from 'react'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../../hooks/useMovieDetails'

import MovieDetail from '../../UI/MovieDetail/MovieDetail'
import './MovieDetails.css'
import SkeletonCard from '../../components/Cards/SkeletonCard'

const MovieDetailPage = () => {
  const { id } = useParams()

  const { movie, loading, error } = useMovieDetails(id)

  if (loading) {
    return (
      <div className="movie-detail-page">
        <div className="movie-loader">
          <SkeletonCard />
        </div>
      </div>
    )
  }

  if (error) {
    return <div className="error">Error: {error}</div>
  }

  if (!movie || movie.Response === 'False') {
    return <div className="not-found">Movie not found</div>
  }

  return (
    <div className="movie-detail-page">
      <MovieDetail movie={movie} />
    </div>
  )
}

export default MovieDetailPage
