import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useMovieDetails from '../../components/useMovieDetails'
import Header from '../../components/Header/Header'
import MovieDetail from '../../UI/MovieDetail/MovieDetail'
import '../MovieDetails/MovieDetails.css'

const MovieDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { movie, loading, error } = useMovieDetails(id)

  if (!id) {
    console.error('Movie ID is undefined')
    navigate('/')
    return null
  }
  if (loading) {
    return <div className="loading">Loading movie details...</div>
  }

  if (error) {
    return <div className="error">Error: {error}</div>
  }

  if (!movie || movie.Response === 'False') {
    return <div className="not-found">MOvie not found</div>
  }

  return (
    <div className="movie-detail-page">
      <Header />
      <MovieDetail movie={movie} />
    </div>
  )
}

export default MovieDetailPage
